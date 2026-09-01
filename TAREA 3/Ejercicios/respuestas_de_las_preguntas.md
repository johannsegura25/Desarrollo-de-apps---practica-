# RETO - P03 | Desarrollo de Aplicaciones - Laboratorio N° 03

## Temática
NEXUS Lab: empresa ficticia dedicada al diseño y desarrollo de experiencias digitales.

## Estructura
- `index.html` → estructura semántica.
- `styles.css` → estilos, Flexbox, CSS Grid, responsive y efectos.
- `assets/` → carpeta preparada para imágenes u otros recursos.

## Decisiones de layout

### ¿Dónde utilicé Flexbox y por qué?
Se utiliza Flexbox en:
- Header/navegación: alinea logo y enlaces en una sola dimensión.
- Hero: permite organizar texto y tarjeta y cambiar de columna a fila.
- Botones: distribuye las acciones de forma flexible.
- Métricas: distribuye los indicadores horizontalmente.
- CTA y footer: alinea contenido y acciones.

Flexbox es adecuado cuando la distribución principal es en una sola dimensión.

### ¿Dónde utilicé Grid y por qué?
Se utiliza CSS Grid en:
- Servicios.
- Proyectos.
- El pequeño dashboard visual del proyecto.

Grid es adecuado porque estas zonas necesitan organizar elementos en filas y columnas.

### ¿Qué componente consiguió adaptarse sin Media Query?
Las cuadrículas de servicios y proyectos utilizan:
`repeat(auto-fit, minmax(min(100%, 240px), 1fr))`
y
`repeat(auto-fit, minmax(min(100%, 280px), 1fr))`.

Gracias a `auto-fit` + `minmax()`, las tarjetas se reorganizan automáticamente según el ancho disponible, sin necesitar un breakpoint para cada tamaño.

### ¿Qué situación determinó la creación de tu breakpoint?
El breakpoint de 760px se creó cuando el contenido del Hero y del CTA tiene suficiente espacio para pasar de una distribución vertical a una horizontal sin que el texto, la tarjeta o los botones se compriman demasiado.

### ¿Qué problema responsive encontraste durante las pruebas?
Al reducir mucho el ancho, una distribución fija de varias columnas podría producir desbordamiento horizontal o tarjetas demasiado estrechas.

### ¿Cómo lo solucionaste?
Se utilizaron:
- Mobile First.
- `minmax()` y `auto-fit` en Grid.
- `min(100%, ...)` para evitar tarjetas más anchas que el contenedor.
- `flex-wrap` en los botones.
- `overflow-x: hidden` como protección adicional.
- Un único breakpoint principal para reorganizar Hero, CTA y algunos detalles de proyectos.

### ¿Qué efecto visual incorporaste y qué propósito cumple?
Las tarjetas de servicios y proyectos utilizan `:hover`, `transition` y `transform`.
Al pasar el cursor, se elevan ligeramente. Esto sirve como señal visual de que son elementos interactivos y mejora la percepción de profundidad sin utilizar animaciones excesivas.

## Pruebas recomendadas
En Chrome/Edge:
1. Abrir DevTools (F12).
2. Activar el modo dispositivo.
3. Probar un viewport pequeño, por ejemplo 360px.
4. Probar uno intermedio, por ejemplo 768px.
5. Probar uno amplio, por ejemplo 1440px.
6. Arrastrar manualmente el ancho para encontrar problemas entre esos valores.

## Cómo abrir
1. Extrae el ZIP.
2. Abre la carpeta `reto-p03` en Visual Studio Code.
3. Abre `index.html` con Live Server o directamente en el navegador.
