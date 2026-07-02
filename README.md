# Fin del Mundo Propiedades — Demo Inmobiliaria (Ushuaia)

Sitio demo de una inmobiliaria en Ushuaia. HTML/CSS/JS puro, sin build ni dependencias. Todo el contenido (marca, teléfonos, propiedades) es de ejemplo — reemplazar antes de usarlo con un cliente real (ver comentarios `DEMO` en `js/data.js`).

## Estructura

```
index.html          Home
propiedades.html     Catálogo con filtros
propiedad.html        Ficha de propiedad (?id=1001...1008)
propietarios.html     Tasaciones
nosotros.html          Sobre la inmobiliaria
contacto.html           Contacto
css/styles.css            Estilos
js/data.js                  Datos de demo (propiedades + datos de la agencia)
js/script.js                  Lógica del sitio (filtros, galería, formularios)
```

## Ver localmente

Abrir `index.html` directamente en el navegador. No requiere servidor ni instalación.

## Desplegar en EasyPanel

Este repo incluye un `Dockerfile` (nginx) listo para EasyPanel:

1. Subir este repo a GitHub.
2. En EasyPanel: **Create Service → App → From Git Repository**, apuntar a este repo.
3. Build method: **Dockerfile** (lo detecta automáticamente).
4. Puerto interno: **80**.
5. Deploy.

También sirve en cualquier otro hosting de contenedores (Railway, Render, Fly.io, un VPS con Docker) sin cambios.

## Desplegar sin Docker (Netlify / Hostinger / GitHub Pages)

Al ser HTML/CSS/JS estático, también se puede arrastrar la carpeta directo a Netlify Drop, o subirla a `public_html` en cualquier hosting compartido — el `Dockerfile`/`nginx.conf` no son necesarios en ese caso.
