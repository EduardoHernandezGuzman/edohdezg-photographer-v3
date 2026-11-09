# Portfolio de EdoHdezG — v3

Portfolio fotográfico de **Eduardo Hernández Guzmán (EdoHdezG)**: retrato y fotografía de calle en blanco y negro y color.

**En línea**: https://eduardohernandezguzman.github.io/edohdezg-photographer-v3/

Esta versión tiene un repositorio y despliegue independientes de v2.

## Diseño v3

- Portada editorial con subtítulo y acceso a los proyectos.
- Fondos blanco y negro, con acentos ámbar.
- Menú numerado y sección de contacto ampliada.
- Galerías con el tamaño y distribución de v2, sin pies de foto.
- Presentación personal: «Soy Edo».

## Secciones

- **Sobre mí**: enfoque del autor y su forma de trabajar.
- **Proyectos**: tres galerías — _Imagines Viae_, _Homines in Albo et Nigro_ y _Homines in Colore_ — con zoom de las fotos al pasar el cursor.
- **Contacto**: email y redes sociales.

## Tecnologías

HTML5, CSS3 y JavaScript vanilla (módulos ES). Sin frameworks en runtime:

- Fuentes auto-hospedadas (Oswald, Merriweather y Bebas Neue) con caras de respaldo medidas (`size-adjust`).
- Imágenes en AVIF con fallback WebP/JPG y `srcset`, generadas con sharp.
- Scroll reveal con IntersectionObserver y aparición progresiva de las fotos al cargar.
- Acento ámbar accesible (AA sobre fondos claros y oscuros) y escala tipográfica fluida con `clamp()`.

## Estructura

```
├── index.html              # página única
├── 404.html                # página 404 (GitHub Pages)
├── css/
│   ├── style.css           # estilos del sitio (tokens, layout, componentes)
│   ├── fonts.css           # declaraciones @font-face y caras de respaldo
│   ├── 404.css             # estilos de la página 404
│   └── no-js.css           # fallback sin JavaScript
├── js/                     # módulos ES
│   ├── main.js             # punto de entrada
│   ├── animations.js       # scroll reveal y fade-in de imágenes
│   ├── contact.js          # email y botón de copiar
│   ├── footer.js           # año dinámico
│   ├── menu.js             # menú overlay accesible
│   ├── navigation.js       # topbar, scrollspy y volver arriba
│   └── utils.js            # bloqueo de scroll compartido
├── fonts/                  # woff2 auto-hospedadas y sus licencias
├── img/                    # originales (fuente) e iconos
│   └── opt/                # derivados AVIF/WebP/JPG generados con sharp
└── scripts/
    ├── optimize-images.mjs # pipeline de imágenes
    └── og-card.html        # plantilla de la imagen social (1200×630)
```

## Scripts

| Comando                   | Descripción                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `npm run build`           | Prepara `dist/` con solo los archivos públicos del sitio.         |
| `npm run dev`             | Sirve el sitio en `http://localhost:3000`.                        |
| `npm run format`          | Formatea el proyecto con Prettier.                                |
| `npm run format:check`    | Comprueba el formato sin modificar archivos.                      |
| `npm run optimize:images` | Regenera `img/opt/` (AVIF/WebP/JPG en 400–1800px, sin upscaling). |

Para regenerar la imagen social (`og-image.jpg`), abre `scripts/og-card.html` en el navegador y captura la vista de 1200×630.

## Despliegue

El sitio se publica en **GitHub Pages** mediante GitHub Actions (`.github/workflows/deploy.yml`): cada push a `master` despliega automáticamente.

La primera vez hay que activarlo en **Settings → Pages → Source: GitHub Actions**.

### Render

El repositorio incluye `render.yaml` para desplegarlo como sitio estático mediante
un Blueprint. El comando `npm run build` prepara `dist/` con los archivos públicos; no necesita
un proceso Node en producción.

Para configurar un **Static Site** manualmente, deja **Root Directory** vacío, configura
**Build Command** con `node scripts/build-site.mjs` y usa `dist` como
**Publish Directory**. Deben publicarse
también las carpetas `js/`, `css/`, `fonts/` e `img/` junto con `index.html`.

Si el menú no responde, abre las herramientas del navegador y revisa **Console**
y **Network**: `js/main.js` y sus módulos deben devolver estado 200 y contenido
JavaScript. Una respuesta HTML (por ejemplo por una redirección global a
`index.html`) o un error 404 impide inicializar el menú y las animaciones.
No añadas una regla de reescritura global para este sitio de una sola página:
la navegación utiliza anclas (`#about`, `#projects`, `#contact`).

Los textos permanecen visibles si JavaScript no llega a inicializar las
animaciones, incluso cuando el navegador tiene JavaScript habilitado.

## Calidad

- **Accesibilidad**: 100 en Lighthouse (alt descriptivos, foco visible, skip link, menú operable por teclado, soporte de `prefers-reduced-motion` y `prefers-contrast`).
- **Rendimiento**: ~250 KB de carga inicial y menos de 1 MB con la página completa (19 imágenes AVIF desde 21 MB de originales), con preload de fuentes e imágenes y métricas de respaldo.
- **Seguridad**: CSP restrictiva (también en la 404) y sin dependencias externas en runtime.

## Historial de mejoras

1. **Cimientos**: tooling de desarrollo (Prettier, servidor local) y formato.
2. **Seguridad**: CDNs auto-hospedados, SVGs inline, enlaces seguros y email ofuscado.
3. **Accesibilidad**: HTML semántico, textos alternativos, menú accesible y CSP.
4. **Organización**: módulos ES, design tokens, IntersectionObserver y CSS Grid propio (sin Bootstrap).
5. **Rendimiento**: pipeline con sharp, AVIF/WebP + `srcset` y lazy loading.
6. **UX**: lightbox nativo, topbar con scrollspy, hero fluido y footer.
7. **SEO y despliegue**: metadatos, Open Graph, JSON-LD y GitHub Pages.
8. **v2.0 (rediseño)**: acento ámbar, tipografía fluida, hero `svh` con gradiente, skip link, zoom al hover, copiar email y 404 a juego.

## Licencia

El **código** se distribuye bajo licencia MIT (ver [`LICENSE`](./LICENSE)). Las **fotografías** no están cubiertas por esa licencia: © Eduardo Hernández Guzmán, todos los derechos reservados.

## Contacto

- Email: edohdezg@gmail.com

## Seguridad y privacidad

El despliegue publica únicamente `dist/`, generado por `npm run build`.
Los originales de `img/`, las herramientas y los archivos del repositorio no
forman parte de la web publicada. El repositorio es público: no añadas
credenciales, archivos `.env` ni fotografías con metadatos personales.

Dependabot revisa semanalmente las dependencias npm y las acciones de GitHub.
