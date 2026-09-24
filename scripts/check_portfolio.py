"""Browser smoke checks for the public site. All external network is intercepted."""
import functools
import json
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "test-results"
OUTPUT.mkdir(exist_ok=True)
handler = functools.partial(SimpleHTTPRequestHandler, directory=str(ROOT / "dist"))
server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
threading.Thread(target=server.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{server.server_port}"
PAGES = ["/", "/proyectos/backuppro.html", "/proyectos/estetica.html", "/proyectos/demo-spa.html", "/proyectos/proyecto-grado.html"]
results = []

def check(condition, message):
    assert condition, message
    results.append(message)

def isolate(context):
    # Even a regressed form must never reach a real mailbox during a test.
    context.route("**/*", lambda route: route.continue_() if urlparse(route.request.url).hostname == "127.0.0.1" else route.abort())

try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        for width in (320, 390, 768, 1024, 1440):
            context = browser.new_context(viewport={"width": width, "height": 900}, reduced_motion="reduce", color_scheme="light")
            isolate(context)
            page = context.new_page()
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            for path in PAGES:
                response = page.goto(BASE + path, wait_until="networkidle")
                check(response.status == 200, f"HTTP 200: {path} at {width}px")
                expect(page.locator("h1")).to_be_visible()
                overflow = page.evaluate("document.documentElement.scrollWidth > innerWidth + 1")
                check(not overflow, f"No horizontal overflow: {path} at {width}px")
                hidden = page.locator("main section").evaluate_all("(items) => items.filter(el => getComputedStyle(el).opacity === '0').length")
                check(hidden == 0, f"Content remains visible: {path} at {width}px")
                if path == "/" and width in (390, 1440):
                    page.screenshot(path=str(OUTPUT / f"home-{width}-light.png"), full_page=True)
                if path == "/proyectos/backuppro.html" and width == 1440:
                    page.screenshot(path=str(OUTPUT / "backuppro-desktop.png"), full_page=True)
            check(not errors, f"No JavaScript errors at {width}px: {errors}")
            context.close()

        context = browser.new_context(viewport={"width": 390, "height": 844}, reduced_motion="reduce", color_scheme="light")
        isolate(context)
        page = context.new_page()
        page.goto(BASE)
        page.keyboard.press("Tab")
        expect(page.locator(".skip-link")).to_be_focused()
        page.keyboard.press("Enter")
        expect(page.locator("#main-content")).to_be_focused()
        results.append("Keyboard skip link moves focus to main")
        page.locator("#nav-toggle").click()
        expect(page.locator("#nav-menu")).to_be_visible()
        page.keyboard.press("Escape")
        expect(page.locator("#nav-menu")).not_to_be_visible()
        expect(page.locator("#nav-toggle")).to_be_focused()
        page.locator("#nav-toggle").click()
        page.locator("#nav-menu a[href='#projects']").click()
        expect(page.locator("#nav-menu")).not_to_be_visible()
        expect(page.locator("#projects")).to_be_focused()
        results.append("Mobile menu opens, closes with Escape, and navigates with focus")
        page.locator("[data-inquiry='Sitio web para mi negocio']").click()
        expect(page.locator("#interest")).to_have_value("Sitio web para mi negocio")
        results.append("Service CTA selects the relevant inquiry")
        page.locator("#theme-toggle").click()
        expect(page.locator("html")).to_have_attribute("data-theme", "dark")
        page.reload()
        expect(page.locator("html")).to_have_attribute("data-theme", "dark")
        page.screenshot(path=str(OUTPUT / "home-390-dark.png"), full_page=True)
        page.set_viewport_size({"width": 1440, "height": 1000})
        page.screenshot(path=str(OUTPUT / "home-1440-dark.png"), full_page=True)
        results.append("Theme persists after reload")

        page.locator("#name").fill("Persona de prueba")
        page.locator("#email").fill("qa@example.com")
        page.locator("#message").fill("Consulta simulada para verificar el formulario.")
        endpoint = "https://formsubmit.co/ajax/**"
        page.route(endpoint, lambda route: route.fulfill(status=200, content_type="application/json", body=json.dumps({"success": "false"})))
        page.locator("#contact-form button[type='submit']").click()
        expect(page.locator("#form-status")).to_contain_text("No pude confirmar")
        expect(page.locator("#message")).to_have_value("Consulta simulada para verificar el formulario.")
        expect(page.locator("#contact-form button[type='submit']")).to_be_enabled()
        results.append("Unconfirmed delivery preserves message and restores submit button")
        page.unroute(endpoint)
        page.route(endpoint, lambda route: route.fulfill(status=200, content_type="application/json", body=json.dumps({"success": "true"})))
        page.locator("#contact-form button[type='submit']").click()
        expect(page.locator("#form-status")).to_contain_text("fue enviado")
        expect(page.locator("#message")).to_have_value("")
        results.append("Confirmed delivery resets form; no real messages sent")
        context.close()

        context = browser.new_context(java_script_enabled=False, viewport={"width": 390, "height": 844})
        isolate(context)
        page = context.new_page()
        for path in PAGES:
            page.goto(BASE + path)
            expect(page.locator("h1")).to_be_visible()
            if path == "/":
                expect(page.locator("#nav-menu")).to_be_visible()
                check(page.locator("#contact-form").get_attribute("method") == "POST", "Native form fallback exists")
            check(page.locator("main section").evaluate_all("(els) => els.every(el => getComputedStyle(el).opacity !== '0')"), f"No-JS visibility: {path}")
        context.close()

        context = browser.new_context(viewport={"width": 390, "height": 844})
        isolate(context)
        context.add_init_script("Object.defineProperty(window, 'localStorage', {get(){throw new Error('Storage blocked')}})")
        page = context.new_page()
        page.goto(BASE)
        page.locator("#nav-toggle").click()
        expect(page.locator("#nav-menu")).to_be_visible()
        page.locator("#theme-toggle").click()
        results.append("Blocked storage does not break navigation or theme")
        context.close()
        browser.close()
finally:
    server.shutdown()
    (OUTPUT / "checks.json").write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Passed {len(results)} checks.")
