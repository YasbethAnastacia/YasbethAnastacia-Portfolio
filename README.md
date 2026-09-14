# Portafolio de Yasbeth Anastacia

Portafolio React + Vite. Conserva el diseño rosa, las formas orgánicas, la fotografía circular, la línea del tiempo y el selector de proyectos.

## Uso local

Requiere Node.js 22.12 o posterior. Ejecuta npm ci, npm run dev, npm run lint y npm run build. La compilación queda en dist. npm run preview permite revisarla localmente.

## Idioma y tema

Español es el idioma inicial. El contexto global conserva español o inglés en localStorage. El tema sigue al dispositivo hasta que se selecciona manualmente; desde entonces conserva la preferencia. Las animaciones respetan prefers-reduced-motion.

## Capturas

src/assets/Proyects/data.jsx contiene images y mobileImages para cada proyecto. Actualmente mobileImages copia las capturas de laptop. Sustituye esa propiedad por rutas a tus capturas móviles reales sin cambiar los componentes. Al seleccionar un proyecto vuelve a Laptop y a la primera captura. Las flechas del teclado funcionan cuando el foco está dentro de la galería.

## CV

Coloca archivos PDF válidos en public/CV/cv-es.pdf y public/CV/cv-en.pdf. El botón abre /CV/cv-es.pdf o /CV/cv-en.pdf según el idioma. Mientras falte el archivo correspondiente, aparece deshabilitado con un aviso bilingüe. Después de añadirlos vuelve a ejecutar npm run build.

## Limpieza comprobada

Se buscaron referencias en componentes, datos, estilos y configuración antes de eliminar:

- public/PROYECTOS/croshamigurumis/total.png: imagen sin referencias.
- public/PROYECTOS/croshamigurumis/video.gif: animación sin referencias.
- public/PROYECTOS/croshamigurumis/video.mp4: video sin referencias.
- public/HERO/render.png: imagen sin referencias.
- src/assets/Components/LanguageSwitch.jsx: componente sin importaciones; idioma centralizado.
- src/assets/Proyects/formasdecarrusel.txt: notas de prueba sin referencias.

Se incorporó croshamigurumis/k.png a la galería y se conservaron las demás capturas reales y los iconos utilizados. La captura de este portafolio se genera a partir de la versión local terminada.

No se cambiaron las versiones de dependencias ni se publicó el sitio. El ZIP de entrega excluye node_modules, dist, .git y archivos temporales.


## Validación realizada

npm run lint sin advertencias; npm run build correcto. Revisión de la compilación en 320, 375, 768 y 1440 px, español/inglés, persistencia, tema del sistema/manual, cuatro proyectos en Laptop/Celular, teclado, cuatro experiencias y enlaces externos seguros. Sin imágenes rotas ni desbordamiento horizontal detectados.
