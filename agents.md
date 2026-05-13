# Academia - Guía de Desarrollo

## Estructura del Proyecto

```
academia/
├── index.html              # Página principal (hero con fotos cíclicas)
├── cursos.html             # Listado de cursos
├── cursos/
│   ├── curso_web.html     # Curso de programación web
│   └── curso_ia.html      # Curso de IA
├── blog.html              # Listado de artículos
├── blog/
│   ├── ia.html            # Artículo sobre IA
│   ├── ia_llama2.html     # Artículo sobre Llama 2
│   ├── programacion_web.html
│   └── programacion_web2.html
├── quienes_somos.html     # Profesores con fotos circulares
├── contacto.html          # Formulario de contacto
├── login.html             # Login de usuario
├── registro.html          # Registro de usuario
├── aviso_legal.html       # Aviso legal
├── src/
│   ├── scss/
│   │   ├── main.scss      # Entry point (usa @use)
│   │   ├── _variables.scss
│   │   ├── _reset.scss
│   │   ├── _mixins.scss
│   │   ├── _nav.scss
│   │   └── _components.scss
│   ├── js/
│   │   └── main.js        # Toggle menú hamburguesa
│   └── style.css          # Compilado
├── img/                   # Imágenes
│   ├── common/            # Imágenes compartidas
│   ├── cursos/
│   ├── blog/
│   └── quienes-somos/     # Fotos de profesores (hero y quiénes somos)
└── package.json
```

## Convenciones de Código (estilo profesional)

### HTML
- **Clases BEM pragmáticas**: solo clases donde se necesitan. No añadir clases a `<li>` o `<a>` si se pueden estilar por herencia del bloque.
  ```html
  <nav class="header__nav">
    <ul class="header__menu">
      <li><a href="">Enlace</a></li>
    </ul>
  </nav>
  ```
- **Clases necesarias**: bloque (`.header`, `.hero`, `.card`, `.btn`), elemento cuando hay que diferenciar (`.card__title`, `.card__text`, `.hero__content`), modificador para variantes (`.btn--outline`, `.card--horizontal`, `.card--profile`).
- **Página activa**: clase `.is-active` en el `<a>` de la página actual en el menú.
- **Semantic HTML5**: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Atributos `alt`** descriptivos en imágenes.
- **Sin comentarios** en el código.

### SCSS
- **`@use`** en lugar de `@import` (deprecado).
- **Mobile-first**: estilos base para móvil.
- **Breakpoints dentro de cada clase** usando `@include tablet { }` y `@include desktop { }` — todo el componente agrupado en un solo bloque.
- **Anidación máxima 3 niveles** por legibilidad.
- **Un partial por componente** (ej: `_nav.scss`, `_components.scss`).

### Naming
- Bloques: `.header`, `.hero`, `.card`, `.btn`, `.footer`, `.section`
- Elementos: `.header__container`, `.card__title`, `.hero__content`, `.header__more-trigger`
- Modificadores: `.btn--outline`, `.btn--brown`, `.card--horizontal`, `.card--profile`
- Estado: `.is-active`, `.is-open`
- Utilidades: `.btn` (reutilizable), `.section` (sección genérica)

## Colores (variables actuales)
```
$color-black: #000000
$color-green: #00ffff  (acento cyan)
$color-gray: #a9a9a9
$color-white: #ffffff
$color-dim-gray: #696969
$color-lavender: #e6e6fa
$color-silver: #c0c0c0
$color-light-bg: #f5f5f5
$font-family: "Inter", sans-serif
$breakpoint-tablet: 768px
$breakpoint-desktop: 1024px
```

## Estado Actual del Proyecto (13/05/2026)

### Navegación (`_nav.scss`)
- **Móvil**: menú hamburguesa con todos los items visibles al abrir (submenu items inline)
- **Tablet** (768px+): solo Home, Cursos y "Más ▾" visibles; hover en "Más" despliega dropdown con resto de items
- **Desktop** (1024px+): todos los 7 items visibles horizontalmente, sin dropdown
- Logo: 80px móvil, 70px tablet, 90px desktop

### Hero (`_components.scss` — index.html)
- Fondo animado: cicla cada 15s entre bienvenido.jpg, chema.png, azaustre.png
- Móvil: `background-size: cover`, posición `center 30%`
- Tablet/Desktop: `background-size: auto 100%` (foto completa, lados negros)
- Contenido alineado a la izquierda, pegado al borde inferior
- Overlay oscuro al 50%

### Componentes (`_components.scss`)
- `.btn`: fondo cyan, texto negro. Modificador `--outline` (borde cyan, fondo transparente), `--brown` (marrón claro)
- `.card`: tarjeta blanca con bordes redondeados. Hover 3D: translateY(-8px) + scale(1.02) + sombra (solo desktop). Modificadores: `--horizontal` (imagen + texto lado a lado), `--profile` (foto circular 150x150px), `--centered` (contenido centrado).
- `.section`: sección genérica con padding responsive. Modificadores: `--alt` (gris más oscuro), `--darker` (gris aún más oscuro), `--lg` (títulos más grandes con sombra)
- `.section__card`: tarjeta interior beige (#d4c5b0) para destacar contenido
- `.footer`: fondo negro, enlaces en cyan

### Páginas
- **Todas las páginas** tienen header y footer unificados con el mismo menú
- **quienes_somos.html**: cards con fotos de profesores circulares (`.card--profile`)
- **Favicon**: `logo_academia.png` en todas las páginas
- **Fondo body**: `#e8e8e8` uniforme en toda la web
- **main.js**: toggle del menú hamburguesa con clase `.is-open`

## Workflow de Trabajo

1. **Antes de cada cambio**, mostrar propuesta al usuario y esperar confirmación
2. **Orden**: HTML (estructura) → SCSS (estilos) → JS (funcionalidad)
3. **Pasos**: leer archivo → proponer cambios → escribir → verificar compilación
4. **Servidor**: ejecutar `npm run dev` para ver cambios en vivo
5. **Mantener agents.md** actualizado con decisiones tomadas
6. **Hablar cada respuesta**: después de cada respuesta escrita, ejecutar `.\speak.ps1 "texto"` para que el usuario escuche la respuesta

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run sass     # Compilar SCSS en modo watch
npm run build    # Build de producción
```
