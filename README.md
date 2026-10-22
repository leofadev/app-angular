# App Angular – Portafolio

Landing page de mi portafolio personal (**LeofaDev**) construida con Angular. Es una página de una sola vista dividida en componentes por sección.

🔗 **Demo:** [leofadev.github.io/app-angular](https://leofadev.github.io/app-angular/)

## Tecnologías

- [Angular 15](https://angular.dev/) + TypeScript
- CSS por componente
- Jasmine + Karma para pruebas unitarias

## Secciones

| Componente | Contenido |
|---|---|
| `header` | Logo y menú de navegación |
| `section-hero` | Portada con llamado a la acción |
| `section-somos-proya` | Quién soy |
| `section-nuestros-programas` | Proyectos realizados (CRUD, piano en JavaScript, sitio de noticias, etc.) |
| `section-caracteristicas` | Características destacadas |
| `section-final` | Llamado a la acción final |
| `section-footer` | Pie de página |

Todos los componentes están en `src/app/components/` y las imágenes en `src/assets/img/`.

## Ejecutar en local

Requiere Node.js 18 o superior.

```bash
npm install
npm start         # servidor de desarrollo en http://localhost:4200/
npm run build     # build de producción en dist/app-angular/
npm test          # pruebas unitarias
```

## Despliegue

Cada push a `master` compila el proyecto con `--base-href /app-angular/` y lo publica en GitHub Pages mediante el workflow [`deploy-pages.yml`](.github/workflows/deploy-pages.yml).
