# Justificación de la práctica

## Tema
El sitio web trata sobre turismo en Perú y se denomina "Perú Explora".

## Maquetación
El contenido fue separado en tres documentos individuales:
1. Inicio.
2. Destinos.
3. Consejos.

Todos comparten una hoja de estilos para evitar duplicación de código.

## Diseño responsive
Se utilizó CSS Grid para las tarjetas y Flexbox para navegación, botones y bloques de contenido. Las media queries modifican la distribución cuando el ancho es menor a 800 px y 520 px.

## Animaciones
La tarjeta del destino destacado utiliza `@keyframes floatIn`. También se aplican transiciones a botones, enlaces y tarjetas para generar interacción sin perjudicar la funcionalidad.

## Accesibilidad
Se utilizaron etiquetas semánticas, encabezados ordenados, navegación identificable, foco visible, texto con contraste adecuado y soporte para usuarios que prefieren reducir el movimiento.

## Selectores y técnicas
El CSS contiene selectores de elemento, clase, universal, agrupados, descendientes, pseudo-clases y pseudo-elementos. Las variables `:root` permiten cambiar la identidad visual desde un único lugar.

## Eficiencia y mantenibilidad
- Una sola hoja CSS compartida.
- Variables CSS para colores y medidas.
- Componentes reutilizables (`.btn`, `.card`, `.eyebrow`).
- No se usan librerías externas.
- No hay JavaScript innecesario.
- El proyecto funciona localmente.
