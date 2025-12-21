# Ismael Ruge Gonzalez - Portafolio Profesional

Portafolio web profesional de Ismael Ruge Gonzalez, Desarrollador Fullstack Semi-Senior especializado en interoperabilidad de sistemas médicos, optimización de alto rendimiento y desarrollo de soluciones empresariales.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://ismaelruge.github.io)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

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
- [Contacto](#-contacto)
- [Licencia](#-licencia)

## ✨ Características

### Información Profesional
- **3+ años de experiencia** como Desarrollador Fullstack Semi-Senior
- Especialización en **interoperabilidad de sistemas médicos**
- Sistema optimizado para procesar **+300 resultados por segundo**
- **Promedio académico 4.20/5.0** (90% de la carrera completada)
- **113 certificaciones en Platzi**
- **Proyecto de grado publicado** en repositorio universitario

### Diseño Moderno
- ✅ Glassmorphism y efectos visuales modernos
- ✅ Tema claro/oscuro con toggle interactivo
- ✅ Animaciones suaves al hacer scroll
- ✅ Diseño 100% responsive (móvil, tablet, desktop)
- ✅ Gradientes y efectos de hover profesionales

### Funcionalidades Interactivas
- 🔄 **Duración de empleo actualizada automáticamente** (JavaScript)
- 🌓 **Modo oscuro/claro** con persistencia en localStorage
- 📧 **Formulario de contacto funcional** (FormSubmit)
- 📊 **Barras de progreso animadas** para idiomas
- 🎯 **Smooth scroll** entre secciones
- ⌨️ **Easter egg** con Konami Code

## 🛠️ Tecnologías

### Frontend
- HTML5 semántico
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
- Intersection Observer API para animaciones

## 📁 Estructura del Proyecto

```
IsmaelRuge.github.io/
│
├── index.html              # Página principal del portafolio
├── styles.css              # Estilos con sistema de temas y responsive
├── script.js               # Funcionalidades interactivas
├── README.md               # Este archivo
│
└── assets/
    └── Images/
        └── Profile.png     # Foto de perfil
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

### Formulario de Contacto
```html
<!-- Configurado con FormSubmit -->
<!-- Los mensajes llegan a: ismaelruge@gmail.com -->
<form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
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
- Layout completo con sidebars
- Grids de hasta 3 columnas
- Animaciones completas

#### Tablet (769px - 1024px)
- Grids de 2 columnas
- Container de 900px
- Navegación optimizada

#### Móvil (≤768px)
- Grids de 1 columna
- Toggle de tema más pequeño
- Timeline compacto
- Estadísticas en 2 columnas

#### Móvil pequeño (≤480px)
- Foto de perfil 120px
- Estadísticas en 1 columna
- Botones full-width
- Texto reducido

## 🔍 SEO y Optimización

### Meta Tags
```html
<!-- SEO Básico -->
<title>Ismael Ruge Gonzalez | Desarrollador Fullstack Semi-Senior</title>
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph (Redes Sociales) -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
```

### Performance
- ✅ Sin dependencias externas
- ✅ CSS y JS minificables
- ✅ Imágenes optimizadas
- ✅ Lazy loading de imágenes (nativo)
- ✅ Smooth scroll performance

## 📊 Secciones del Portafolio

### 1. Hero Section
- Foto de perfil con efecto glassmorphism
- Toggle de tema claro/oscuro
- Enlaces a redes sociales (LinkedIn, GitHub, Platzi)
- Información de contacto

### 2. Sobre Mí
- Descripción profesional con métricas reales
- Mención de +300 resultados/segundo
- 113 certificaciones y promedio 4.20
- 3 objetivos profesionales

### 3. Habilidades Técnicas (6 categorías)
- Lenguajes de programación
- Frontend (React, Angular, etc.)
- Backend (.NET, Node.js, etc.)
- Bases de datos (SQL Server, MongoDB, etc.)
- DevOps & Cloud (Azure, Docker, etc.)
- Seguridad y herramientas

### 4. Experiencia Profesional
**Colcan** (Dic 2023 - Actualidad)
- Desarrollador Fullstack Semi-Senior
- Sistema de interoperabilidad médica
- +300 resultados por segundo
- Liderazgo de equipos

**HAS SQL S.A.S** (Mar 2022 - Dic 2023)
- Desarrollador Fullstack Junior
- Soluciones gubernamentales
- Configuración de servidores

### 5. Educación
**Ingeniería en Sistemas - Uniremington**
- Promedio: 4.20/5.0
- 90% completado (131/145 créditos)
- 34 cursos aprobados
- 4 materias para graduarte

**Proyecto de Grado**
- Software de copias de seguridad automáticas
- Integración con 5 plataformas cloud
- Publicado en repositorio universitario
- [Ver publicación](https://repositorio.uniremington.edu.co/handle/123456789/8679)

### 6. Certificaciones
- 113 certificaciones de Platzi
- Organizadas en 9 categorías
- Enlace a perfil completo

### 7. Idiomas
- Español (Nativo)
- Inglés (Básico)

### 8. Contacto
- Formulario funcional
- Validación de campos
- Mensajes de éxito/error

## 🌟 Destacados Técnicos

### Logros Profesionales
- ⚡ Sistema optimizado: **+300 resultados por segundo**
- 🏥 Interoperabilidad entre dispositivos médicos
- 💾 Implementación de caché local eficiente
- 🔄 Gestión de trazabilidad completa
- 👥 Liderazgo de equipos de desarrollo

### Formación Académica
- 🎓 Promedio: **4.20/5.0**
- 📚 **90%** de la carrera completada
- 📖 Proyecto de grado **publicado**
- 🏆 **113 certificaciones** en Platzi

### Stack Tecnológico
- **Frontend**: Angular, React, HTML5, CSS3, JavaScript, TypeScript
- **Backend**: .NET (ASP.NET Core, Web API, MVC), Node.js, Express.js
- **Bases de Datos**: SQL Server, MongoDB, PostgreSQL, MySQL
- **Cloud**: Azure (App Services, Blob Storage), Google Drive API, OneDrive API
- **DevOps**: Docker, IIS, CI/CD con GitHub Actions
- **Otros**: SignalR, Socket.io, JWT, OAuth2

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

© 2025 Ismael Ruge Gonzalez. Todos los derechos reservados.

Este portafolio fue diseñado y desarrollado por Ismael Ruge Gonzalez.

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
1. **Experiencia**: Edita `index.html` líneas 216-295
2. **Habilidades**: Edita `index.html` líneas 129-210
3. **Certificaciones**: Edita `index.html` líneas 336-577
4. **Educación**: Edita `index.html` líneas 299-335

#### Configurar Formulario
1. Crear cuenta en [FormSubmit](https://formsubmit.co)
2. Actualizar email en `script.js` línea 155
3. Verificar email la primera vez

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
