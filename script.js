// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    initLanguageProgressBars();
    updateJobDuration();
});

// ========================================
// TEMA CLARO/OSCURO
// ========================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Cargar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    html.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    // Toggle de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
    } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
    }
}

// ========================================
// ANIMACIONES AL SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observar cards individuales
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// ========================================
// SCROLL SUAVE PARA NAVEGACIÓN
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offset = 80; // Offset para header fijo si lo hay
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// BARRAS DE PROGRESO DE IDIOMAS
// ========================================
function initLanguageProgressBars() {
    const languageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.language-progress-bar');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 200);
                }
                languageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.language-item').forEach(item => {
        languageObserver.observe(item);
    });
}

// ========================================
// ACTUALIZACIÓN AUTOMÁTICA DE DURACIÓN DEL TRABAJO
// ========================================
function updateJobDuration() {
    const durationElement = document.getElementById('colcan-duration');
    if (!durationElement) return;

    // Fecha de inicio: 13 de diciembre de 2023
    const startDate = new Date('2023-12-13T00:00:00-05:00'); // Zona horaria de Colombia (UTC-5)

    // Fecha actual en zona horaria de Colombia
    const now = new Date();
    const colombiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Bogota' }));

    // Calcular la diferencia en meses
    let months = (colombiaTime.getFullYear() - startDate.getFullYear()) * 12;
    months += colombiaTime.getMonth() - startDate.getMonth();

    // Ajustar si el día actual es menor que el día de inicio
    if (colombiaTime.getDate() < startDate.getDate()) {
        months--;
    }

    // Calcular años y meses
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    // Formatear el texto
    let durationText = '';

    if (years > 0 && remainingMonths > 0) {
        durationText = `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
    } else if (years > 0) {
        durationText = `${years} ${years === 1 ? 'año' : 'años'}`;
    } else {
        durationText = `${months} ${months === 1 ? 'mes' : 'meses'}`;
    }

    durationElement.textContent = durationText;
}

// ========================================
// FORMULARIO DE CONTACTO
// ========================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validación básica
        if (!validateEmail(data.email)) {
            showFormMessage('Por favor, ingresa un email válido.', 'error');
            return;
        }

        if (!data.name || !data.message) {
            showFormMessage('Por favor, completa todos los campos.', 'error');
            return;
        }

        // Mostrar estado de carga
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        form.classList.add('loading');

        try {
            // Usando FormSubmit (servicio gratuito)
            // Reemplaza con tu endpoint de FormSubmit o EmailJS
            const response = await fetch('https://formsubmit.co/ajax/ismaelruge@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: `Nuevo mensaje de ${data.name} desde tu portafolio`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                showFormMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                form.reset();
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage(
                'Hubo un error al enviar el mensaje. Por favor, contáctame directamente a ismaelruge@gmail.com',
                'error'
            );
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            form.classList.remove('loading');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(message, type) {
    // Eliminar mensaje previo si existe
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Crear nuevo mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    const form = document.getElementById('contact-form');
    form.appendChild(messageDiv);

    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ========================================
// EFECTO DE TYPING (OPCIONAL)
// ========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ========================================
// DETECCIÓN DE SCROLL PARA HEADER (si se añade)
// ========================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Aquí puedes añadir lógica para header sticky si lo necesitas
    // Por ejemplo, cambiar estilos del header al hacer scroll

    lastScroll = currentScroll;
});

// ========================================
// EASTER EGG - KONAMI CODE (opcional, para diversión)
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Efecto divertido cuando se ingresa el Konami Code
    const body = document.body;
    body.style.animation = 'rainbow 2s linear infinite';

    setTimeout(() => {
        body.style.animation = '';
    }, 5000);
}

// Añadir animación rainbow al CSS si quieres usarla
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// UTILIDADES
// ========================================

// Throttle function para optimizar eventos de scroll
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function para inputs
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Copiar email al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showFormMessage('Email copiado al portapapeles!', 'success');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Exportar funciones si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTheme,
        initScrollAnimations,
        initContactForm,
        validateEmail
    };
}
