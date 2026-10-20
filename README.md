# Java Full Stack · Martes

Portal de Ana Alvarado para Dev Senior Code. Temario transcrito del PDF del programa: 3 módulos, 12 clases y workshop adicional de 4 horas.

## Abrir
Abre index.html en tu navegador. También funciona en un alojamiento estático como GitHub Pages, sin instalación ni compilación.

## Publicar una guía
1. Coloca el archivo y sus recursos en la carpeta de su clase dentro de guias/. Nombre recomendado: index.html.
2. Abre curso.js y encuentra el módulo y la clase.
3. Cambia `"guia": null` por la ruta entre comillas, por ejemplo: `"guia": "guias/modulo-01-angular-moderno/clase-01/index.html"`.
4. Guarda y recarga el portal. La tarjeta será un enlace y aumentará el contador de guías disponibles.

La propiedad carpeta indica el destino recomendado; guia controla si el material está publicado. Dejar null mantiene la clase visible como pendiente, sin enlaces rotos. No es necesario editar index.html ni portal.js. Se pueden usar otras rutas y nombres o enlazar archivos PDF. Los archivos Markdown se guardan como recursos; para ver una guía en el visor, usa HTML o PDF.

## Organización
- curso.js: nombres del temario y rutas de publicación.
- biblioteca.js: construcción de las tarjetas.
- portal.css y portal.js: diseño y visor heredados de BasePortal.
- curso.css: ajustes del curso.
- guias/modulo-01-angular-moderno/clase-01 a clase-04.
- guias/modulo-02-integracion-full-stack/clase-01 a clase-04.
- guias/modulo-03-seguridad-calidad-proyecto/clase-01 a clase-04.
- guias/workshop-proyecto-real: material del cierre, independiente de los 3 módulos.

Las carpetas incluyen README.md para conservarlas al crear el repositorio. Puedes agregar imágenes y otros recursos junto a cada guía y usar rutas relativas. El visor conserva Inicio, Anterior/Siguiente, abrir sola, tema y búsqueda. Anterior/Siguiente recorre únicamente las guías publicadas. No hay fechas inventadas. Las preferencias de tema y guías visitadas se guardan en el navegador. Las fuentes de Google tienen alternativas locales si no hay conexión.
