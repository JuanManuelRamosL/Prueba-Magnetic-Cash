# Frontend - Tagamics (front-prueba)

Este es el frontend en React/Vite para el desafío Tagamics.

Requisitos: tener el backend corriendo en http://127.0.0.1:8000 con los endpoints REST:

- GET /api/shoes/
- POST /api/shoes/
- GET /api/shoes/:id/
- (opcional) PUT/DELETE /api/shoes/:id/

Pasos para levantar el frontend:

1. Instalar dependencias

```bash
cd front-prueba
npm install
```

2. Levantar la aplicación en modo desarrollo

```bash
npm run dev
```

El proyecto usa un proxy en `vite.config.js` que reenvía `/api` a `http://127.0.0.1:8000`, así no deberías necesitar configurar CORS en el backend para desarrollo local.

Flujo a probar:

- Abrir la app (por defecto Vite indica la URL, p.ej. http://localhost:5173)
- Ver listado de zapatillas
- Agregar una nueva desde "Agregar" (formulario)
- Ver detalle (clic en "Ver")

Si el backend no está corriendo o los endpoints difieren, ajustá la URL en `src/api.js`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
