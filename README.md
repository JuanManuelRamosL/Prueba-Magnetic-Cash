# Tagamics: Guía

Este proyecto incluye:
- **Backend:** Django REST Framework (`tagamics-back`)
- **Frontend:** React (`front-prueba`)

---

## Requisitos
- Docker y Docker Compose
- Node.js y npm

---

## Levantar el backend (Django + MySQL)

```bash
cd tagamics-back
docker-compose up -d --build
```
- Accede a la API en: [http://localhost:8000/api/shoes/](http://localhost:8000/api/shoes/)

---

## Levantar el frontend (React)

```bash
cd ../front-prueba
npm install
npm run dev
```
- Accede al frontend en: [http://localhost:5173](http://localhost:5173)

---

## Comandos útiles
- Parar todo:
  ```bash
  cd tagamics-back
docker-compose down
  ```
- Ver logs del backend:
  ```bash
  docker-compose logs web
  ```

---

## Endpoints principales
- Listar zapatillas: `GET /api/shoes/`
- Crear zapatilla: `POST /api/shoes/`
- Ver detalle: `GET /api/shoes/<id>/`
- Editar: `PUT/PATCH /api/shoes/<id>/`
- Eliminar: `DELETE /api/shoes/<id>/`

---

## Notas
- El backend se levanta con datos iniciales (fixtures).
- Puedes modificar `.env` para cambiar credenciales o puertos.
---

¡Listo! Con estos pasos esta el sistema funcionando en minutos saludos juanmanuel.
