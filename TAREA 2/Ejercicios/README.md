# Perú Explora — Proyecto de práctica CSS

## Cómo abrirlo en Visual Studio Code
1. Descomprime el archivo.
2. Abre la carpeta `proyecto_css_responsive` en Visual Studio Code.
3. Abre `index.html` con Live Server (recomendado) o directamente en el navegador.

## Páginas
- `index.html`: portada.
- `destinos.html`: tarjetas de destinos.
- `consejos.html`: checklist y llamada a la acción.

## Requisitos cubiertos
### 1. Selectores CSS
El proyecto utiliza:
- Selectores de elemento: `body`, `h1`, `p`, `a`.
- Selectores de clase: `.hero`, `.btn`, `.feature-card`.
- Selector universal: `*`.
- Selectores descendientes: `.hero .eyebrow`.
- Pseudo-clases: `:hover`, `:focus-visible`.
- Pseudo-elementos: `::before`, `::after`, `::selection`.
- Selectores agrupados: `h1, h2, h3, p`.
- Selectores por atributo: `a[aria-label]` no fue necesario; la accesibilidad se implementó mediante HTML semántico y atributos ARIA donde aportan valor.

### 2. Responsive
Se usan CSS Grid, Flexbox y media queries para escritorio, tablet y móvil.

### 3. Animaciones
- `@keyframes floatIn` anima la tarjeta destacada.
- `transition` se aplica a enlaces, botones y tarjetas.
- `prefers-reduced-motion` reduce el movimiento para usuarios que lo solicitan.

### 4. Accesibilidad
- HTML semántico.
- `lang="es"`.
- `meta viewport`.
- Navegación con `aria-label`.
- Enlaces claramente identificables.
- Estados `:focus-visible`.
- Contraste alto entre texto principal y fondos.
- Tamaños fluidos mediante `clamp()`.
- Soporte para `prefers-reduced-motion`.

### 5. Diseño y optimización
Se eligió una estética editorial inspirada en viajes: mucho espacio, tipografía grande, tarjetas y bloques de color. Las variables CSS centralizan colores, tamaños y radios para facilitar el mantenimiento. Grid se utiliza para estructuras de tarjetas y Flexbox para navegación, botones y CTA.

## Evaluación sugerida
Para la entrega puedes probar:
- Lighthouse de Chrome: Accessibility, Performance, Best Practices y SEO.
- WAVE Accessibility Evaluation.
- DevTools > Toggle device toolbar para comprobar 320 px, 768 px y escritorio.

## Nota
Las "imágenes" de las tarjetas se construyen con gradientes CSS para que el proyecto funcione sin depender de archivos externos. Si el profesor exige fotografías, reemplaza los bloques visuales por `<img>` con `alt` descriptivo.
