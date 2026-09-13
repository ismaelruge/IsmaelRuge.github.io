# Ismael Ruge Gonzalez - Portafolio Profesional

Portafolio web profesional de Ismael Ruge Gonzalez, Ingeniero de Sistemas y Desarrollador Fullstack Senior especializado en sistemas backend de alta concurrencia, interoperabilidad de sistemas médicos y desarrollo de soluciones empresariales.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://ismaelruge.github.io)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License](https://img.shields.io/badge/code%20license-MIT-blue.svg)](LICENSE)

## 🌐 Demo en Vivo

**[https://ismaelruge.github.io](https://ismaelruge.github.io)**

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación Local](#-instalación-local)
- [Características Técnicas](#-características-técnicas)
- [Responsive Design](#-responsive-design)
- [SEO y Optimización](#-seo-y-optimización)
- [Secciones del Portafolio](#-secciones-del-portafolio)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

## ✨ Características

### Información Profesional
- **Ingeniero de Sistemas** graduado (Corporación Universitaria Remington)
- **4+ años de experiencia** como Desarrollador Fullstack Senior
- Especialización en **sistemas backend de alta concurrencia** e **interoperabilidad de sistemas médicos**
- **113 certificaciones en Platzi** y promedio académico de **4.20/5.0**
- Proyecto de grado **aprobado**, publicado en el repositorio institucional

### Diseño Moderno
- ✅ Navegación fija con scroll-spy (resalta la sección activa) y menú hamburguesa en móvil
- ✅ Glassmorphism y efectos visuales modernos
- ✅ Tema claro/oscuro con toggle interactivo
- ✅ Animaciones suaves al hacer scroll
- ✅ Diseño 100% responsive (móvil, tablet, desktop)
- ✅ Botón "Volver arriba" y enlace de accesibilidad "Saltar al contenido"

### Funcionalidades Interactivas
- 🧭 **Navegación por secciones** con resaltado automático del enlace activo
- 🔄 **Duración de empleo actualizada automáticamente** (JavaScript)
- 🌓 **Modo oscuro/claro** con persistencia en localStorage
- 📄 **Descarga directa del CV** en PDF desde el hero
- 📧 **Formulario de contacto funcional** (FormSubmit) con campo anti-spam (honeypot)
- 📊 **Barras de progreso animadas** para idiomas
- 🗂️ **Habilidades, Experiencia, Proyectos, Educación y Certificaciones en acordeón**, colapsados por defecto para una lectura más compacta
- 🎯 **Smooth scroll** entre secciones
- ⌨️ **Easter egg** con Konami Code

## 🛠️ Tecnologías

### Frontend
- HTML5 semántico (`<main>`, `<nav>`, landmarks de accesibilidad)
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript ES6+ (Vanilla JS)

### Herramientas y Servicios
- **GitHub Pages** - Hosting gratuito
- **FormSubmit** - Servicio de formularios sin backend
- **Git** - Control de versiones

### Características CSS Avanzadas
- CSS Grid con `auto-fit` responsive
- Glassmorphism con `backdrop-filter`
- CSS Variables para theming
- Animaciones con `@keyframes`
- Media queries para 3 breakpoints
- Intersection Observer API para animaciones y scroll-spy
- `<details>`/`<summary>` nativos para todos los acordeones (Habilidades, Experiencia, Proyectos, Educación y Certificaciones), usando el atributo `name` para que solo un ítem esté abierto a la vez dentro de cada sección

### Datos Estructurados y SEO
- JSON-LD (`schema.org/Person`) para mejorar la aparición en buscadores
- Open Graph y Twitter Cards
- Favicon SVG propio

## 📁 Estructura del Proyecto

```
IsmaelRuge.github.io/
│
├── index.html              # Página principal del portafolio
├── styles.css               # Estilos con sistema de temas y responsive
├── script.js                 # Funcionalidades interactivas
├── favicon.svg               # Favicon del sitio
├── LICENSE                   # Licencia MIT (aplica solo al código)
├── README.md                 # Este archivo
│
└── assets/
    ├── CV-IsmaelRuge.pdf     # Hoja de vida descargable
    └── Images/
        └── Profile.png       # Foto de perfil
```

## 🚀 Instalación Local

### Prerrequisitos
- Navegador web moderno
- (Opcional) Live Server para desarrollo

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/ismaelruge/IsmaelRuge.github.io.git
cd IsmaelRuge.github.io
```

2. **Abrir en el navegador**
```bash
# Opción 1: Directamente
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opción 2: Con Live Server (VS Code)
# Clic derecho en index.html → "Open with Live Server"
```

3. **Probar responsive design**
- Presiona `F12` para abrir DevTools
- Presiona `Ctrl + Shift + M` para modo responsive
- Prueba diferentes dispositivos

## 🎨 Características Técnicas

### Sistema de Temas
```javascript
// El tema se guarda en localStorage
localStorage.getItem('theme') // 'light' o 'dark'
```

### Duración de Empleo Automática
```javascript
// Calcula automáticamente meses/años desde 13 dic 2023
// Actualizado cada vez que se carga la página
updateJobDuration();
```

### Navegación y Scroll-Spy
```javascript
// Resalta el enlace del menú correspondiente a la sección visible
// y controla el menú hamburguesa en móvil
initNavigation();
```

### Formulario de Contacto
```html
<!-- Configurado con FormSubmit -->
<!-- Los mensajes llegan a: ismaelruge@gmail.com -->
<!-- Incluye un campo honeypot (_honey) invisible como filtro anti-spam -->
<form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <input type="text" name="_honey" class="honeypot-field" tabindex="-1" autocomplete="off">
  <button type="submit">Enviar</button>
</form>
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1025px+
- **Tablet**: 769px - 1024px
- **Móvil**: 481px - 768px
- **Móvil pequeño**: 320px - 480px

### Optimizaciones por Dispositivo

#### Desktop (>1024px)
- Menú de navegación completo con scroll-spy
- Grids de hasta 3 columnas
- Animaciones completas

#### Tablet (769px - 1024px)
- Grids de 2 columnas
- Container de 900px

#### Móvil (≤768px)
- Menú de navegación colapsado en hamburguesa
- Grids de 1 columna
- Timeline compacto
- Botones de CTA a todo el ancho

#### Móvil pequeño (≤480px)
- Foto de perfil 120px
- Estadísticas en 1 columna
- Botones full-width

## 🔍 SEO y Optimización

### Meta Tags
```html
<!-- SEO Básico -->
<title>Ismael Ruge Gonzalez | Ingeniero de Sistemas & Desarrollador Fullstack Senior</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<link rel="canonical" href="https://ismaelruge.github.io/">

<!-- Open Graph (Redes Sociales) -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">

<!-- Datos estructurados -->
<script type="application/ld+json">{ "@type": "Person", ... }</script>
```

### Indexación
- `robots.txt` — permite el rastreo completo y apunta al sitemap
- `sitemap.xml` — declara la URL principal para los buscadores

### Performance y Accesibilidad
- ✅ Sin dependencias externas
- ✅ CSS y JS minificables
- ✅ Landmarks semánticos (`<main>`, `<nav>`) y enlace "Saltar al contenido"
- ✅ Favicon propio en SVG
- ✅ Smooth scroll performance

## 📊 Secciones del Portafolio

1. **Hero** — foto, nombre, título profesional, botones de "Descargar CV" y "Contáctame", contacto y redes sociales.
2. **Datos clave** — franja con años de experiencia, certificaciones y promedio académico.
3. **Sobre Mí** — resumen profesional y objetivos.
4. **Habilidades Técnicas** — 6 categorías en acordeón (lenguajes, frontend, backend, bases de datos, DevOps/Cloud, seguridad).
5. **Experiencia Profesional** — Colcan (Desarrollador Senior Backend/Fullstack) y HAS SQL S.A.S, cada una colapsable.
6. **Proyectos** — proyectos personales en acordeón (agendamiento para centro de estética, app Android con OCR/código de barras/voz para tienda de abarrotes).
7. **Educación** — Ingeniería de Sistemas en Uniremington y proyecto de grado, cada uno colapsable por separado.
8. **Certificaciones & Cursos** — 113 certificaciones de Platzi organizadas en un acordeón por categoría.
9. **Idiomas** — Español (nativo), Inglés (B1).
10. **Contacto** — formulario funcional con validación y protección anti-spam.

## 📞 Contacto

- **Email**: [ismaelruge@gmail.com](mailto:ismaelruge@gmail.com)
- **Teléfono**: +57 313 411 2918
- **LinkedIn**: [linkedin.com/in/ismaelruge](https://www.linkedin.com/in/ismaelruge)
- **GitHub**: [github.com/ismaelruge](https://github.com/ismaelruge)
- **Platzi**: [platzi.com/p/ismaelruge](https://platzi.com/p/ismaelruge)
- **Ubicación**: Yopal, Colombia

## 🔗 Enlaces Importantes

- **Portafolio**: [https://ismaelruge.github.io](https://ismaelruge.github.io)
- **Proyecto de Grado**: [Repositorio Uniremington](https://repositorio.uniremington.edu.co/handle/123456789/8679)
- **Perfil Platzi**: [113 Certificaciones](https://platzi.com/p/ismaelruge/)

## 📝 Licencia

El **código fuente** (HTML, CSS y JavaScript) de este repositorio está bajo licencia [MIT](LICENSE).

El **contenido personal** — texto curricular, hoja de vida, fotografía de perfil y demás información biográfica — no está cubierto por dicha licencia; todos los derechos sobre ese contenido quedan reservados a Ismael Ruge Gonzalez.

---

## 🛠️ Desarrollo

### Personalización

#### Cambiar Tema de Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #3B82F6;  /* Cambiar color primario */
    --primary-dark: #2563EB;   /* Versión más oscura */
    --primary-light: #60A5FA;  /* Versión más clara */
}
```

#### Actualizar Información
Todo el contenido vive en `index.html`, organizado por secciones con comentarios (`<!-- Experiencia Profesional -->`, `<!-- Proyectos -->`, `<!-- Educación -->`, etc.). Busca el comentario de la sección que quieras editar en vez de guiarte por números de línea, ya que estos cambian con cada actualización del contenido.

#### Actualizar el CV
Reemplaza el archivo `assets/CV-IsmaelRuge.pdf` por la versión más reciente; el botón "Descargar CV" del hero apunta directamente a esa ruta.

#### Configurar Formulario
1. Crear cuenta en [FormSubmit](https://formsubmit.co)
2. Actualizar el email de destino en el `fetch` dentro de `initContactForm()` en `script.js`
3. Verificar el email la primera vez que se reciba un mensaje

### Deployment

#### GitHub Pages (Automático)
```bash
git add .
git commit -m "Actualización del portafolio"
git push origin master
```

El sitio se actualiza automáticamente en `https://usuario.github.io`

#### Otros Servicios
- **Netlify**: Arrastra la carpeta completa
- **Vercel**: Conecta el repositorio de GitHub
- **Firebase Hosting**: `firebase deploy`

---

**Desarrollado con 💙 por Ismael Ruge Gonzalez**

*Portafolio profesional utilizando HTML, CSS y JavaScript puro - Sin frameworks, sin dependencias, pura excelencia web.*
