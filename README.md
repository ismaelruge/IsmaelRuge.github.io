# Ismael Ruge — Portafolio profesional

Sitio personal orientado a clientes, empresas y equipos de contratación.

**Sitio público:** https://ismaelruge.github.io/

## Qué presenta

- Servicios de software a medida, integraciones y sitios web.
- Proyectos con capturas reales: BackupPro, Estética y Bella Vita Spa.
- Experiencia profesional visible y descarga del CV.
- Formación, tecnologías e idiomas.
- Contacto por email, teléfono, LinkedIn y formulario.

Las demos comerciales, los proyectos de código abierto y los proyectos privados están identificados. Las métricas y descripciones de los casos de estudio corresponden al alcance documentado en cada página; no representan una auditoría de todos sus escenarios.

## Estructura

- `index.html`: contenido de la portada.
- `portfolio.css`: diseño de la portada, responsive y temas claro/oscuro.
- `styles.css`: estilos de las páginas de caso de estudio.
- `script.js`: tema, navegación móvil, selector de consulta y contacto.
- `proyectos/`: casos de estudio y visor del trabajo de grado.
- `assets/`: fotografía, capturas y CV.
- `robots.txt` y `sitemap.xml`: rastreo e indexación.

## Desarrollo local

Es un sitio estático, sin compilación ni dependencias para producción.

```sh
python -m http.server 8000
```

Abrir http://localhost:8000.

La portada y las páginas mantienen su contenido visible sin JavaScript. Los enlaces internos conservan el comportamiento nativo y la preferencia de movimiento reducido se respeta. El menú móvil se colapsa únicamente cuando se inicializa su interacción.

## Contacto

El formulario usa FormSubmit. El envío sin JavaScript usa la acción HTML; con JavaScript se envía por AJAX, incluye el tipo de consulta y conserva los campos si no se confirma el envío. Requiere que el destinatario haya activado el servicio. Los enlaces de contacto directo permanecen disponibles.

Las verificaciones automatizadas interceptan las peticiones del formulario: **no envían mensajes reales**.

## Actualizar contenido

Editar los textos y enlaces en `index.html`. Reemplazar `assets/CV-IsmaelRuge.pdf` para actualizar la hoja de vida. Añadir al sitemap cualquier nueva página pública. Mantener sincronizados el resumen de cada proyecto y su caso de estudio.

## Publicación

GitHub Pages publica desde `master`. Revisar y fusionar el pull request del rediseño para actualizar el sitio público.

## Licencia

El código fuente está bajo licencia [MIT](LICENSE). El contenido personal, fotografía, capturas y hoja de vida no están cubiertos por esa licencia.

## Vista previa en Netlify

`netlify.toml` genera `dist/` desde una lista explícita de archivos. La vista previa incluye `X-Robots-Tag: noindex, nofollow` y un robots.txt que impide el rastreo; los canonical siguen apuntando al sitio público. Esta configuración no publica cambios en GitHub Pages.
