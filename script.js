/* Progressive enhancement: content and navigation remain usable without JavaScript. */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // An unavailable browser feature must not disable unrelated interactions.
    [initTheme, initNavigation, initContactForm, initInquiryLinks, initBackToTop].forEach(init => {
        try { init(); } catch (error) { console.warn('Portfolio enhancement unavailable:', init.name); }
    });
});

function initTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    let savedTheme;
    try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage may be blocked. */ }
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        const isDark = theme === 'dark';
        if (toggle) {
            toggle.setAttribute('aria-pressed', String(isDark));
            toggle.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
        }
        const sun = document.getElementById('sun-icon');
        const moon = document.getElementById('moon-icon');
        if (sun) sun.style.display = isDark ? 'block' : 'none';
        if (moon) moon.style.display = isDark ? 'none' : 'block';
    }
    const hasSavedTheme = savedTheme === 'light' || savedTheme === 'dark';
    let followsSystem = !hasSavedTheme;
    applyTheme(hasSavedTheme ? savedTheme : (preference.matches ? 'dark' : 'light'));
    if (preference.addEventListener) preference.addEventListener('change', event => {
        if (followsSystem) applyTheme(event.matches ? 'dark' : 'light');
    });
    if (toggle) toggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        followsSystem = false;
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (_) { /* Theme still works for this visit. */ }
    });
}

function initNavigation() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!menu || !toggle) return;
    const mobile = window.matchMedia('(max-width: 800px)');
    function setOpen(open) {
        menu.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }
    toggle.hidden = false;
    menu.classList.add('menu-enhanced');
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setOpen(false);
            // Preserve native hash navigation and move keyboard focus out of the closed menu.
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.getElementById(href.slice(1));
                if (target) {
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            }
        });
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('active')) {
            setOpen(false);
            toggle.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    if (mobile.addEventListener) mobile.addEventListener('change', () => setOpen(false));
    // Keep the native skip-link behavior; main has tabindex="-1" in every page.
    const links = Array.from(menu.querySelectorAll('.nav-link[href^="#"]'));
    const sections = links.map(link => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    const visibleSections = new Set();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) visibleSections.add(entry.target);
            else visibleSections.delete(entry.target);
        });
        const active = sections.find(section => visibleSections.has(section));
        links.forEach(link => {
            const selected = Boolean(active && link.getAttribute('href') === '#' + active.id);
            link.classList.toggle('active', selected);
            if (selected) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
}

function initInquiryLinks() {
    const select = document.getElementById('interest');
    if (!select) return;
    document.querySelectorAll('[data-inquiry]').forEach(link => {
        link.addEventListener('click', () => {
            const value = link.getAttribute('data-inquiry');
            if (Array.from(select.options).some(option => option.value === value)) select.value = value;
        });
    });
}

function initBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;
    const update = () => button.classList.toggle('visible', window.scrollY > 400);
    window.addEventListener('scroll', update, { passive: true });
    update();
    button.addEventListener('click', () => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
        const main = document.getElementById('main-content');
        if (main) main.focus({ preventScroll: true });
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form || !window.fetch || !window.AbortController) return;
    form.addEventListener('submit', async event => {
        event.preventDefault();
        if (form.dataset.sending === 'true') return;
        if (!form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(form));
        if (data._honey) return;
        const name = String(data.name || '').trim();
        const email = String(data.email || '').trim();
        const message = String(data.message || '').trim();
        if (!name || !validateEmail(email) || message.length < 10) {
            showFormMessage('Revisa tu nombre, correo y mensaje (mínimo 10 caracteres).', 'error');
            return;
        }
        const button = form.querySelector('button[type="submit"]');
        const originalLabel = button.innerHTML;
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 20000);
        form.dataset.sending = 'true';
        form.setAttribute('aria-busy', 'true');
        button.disabled = true;
        button.textContent = 'Enviando…';
        showFormMessage('Enviando tu mensaje…', 'pending');
        try {
            const response = await fetch('https://formsubmit.co/ajax/ismaelruge@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                signal: controller.signal,
                body: JSON.stringify({
                    name, email, message,
                    interest: data.interest || 'Consulta',
                    _replyto: email,
                    _subject: 'Portafolio: ' + (data.interest || 'Consulta'),
                    _template: 'table'
                })
            });
            const result = await response.json();
            if (!response.ok || !(result.success === true || result.success === 'true')) {
                throw new Error('Message not accepted');
            }
            showFormMessage('Tu mensaje fue enviado. Gracias por contarme sobre tu proyecto u oportunidad.', 'success');
            form.reset();
        } catch (_) {
            showFormMessage('No pude confirmar el envío. Tu mensaje sigue aquí: puedes intentarlo de nuevo o escribirme a ismaelruge@gmail.com.', 'error');
        } finally {
            clearTimeout(timer);
            delete form.dataset.sending;
            form.removeAttribute('aria-busy');
            button.innerHTML = originalLabel;
            button.disabled = false;
        }
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
    const form = document.getElementById('contact-form');
    if (!form) return;
    let status = document.getElementById('form-status');
    if (!status) {
        status = document.createElement('p');
        status.id = 'form-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.setAttribute('aria-atomic', 'true');
        form.appendChild(status);
    }
    status.className = 'form-message ' + type;
    status.textContent = message;
}
