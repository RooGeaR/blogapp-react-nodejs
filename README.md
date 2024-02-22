Este es un ejemplo de una aplicación de Blog usando React y Tailwind CSS, Node.js con Express.js y Prisma

# Getting Started

El proyecto esta estructurado con las carpetas:

- api (Backend)
- client (Frontend)

## Backend

Desde la carpeta raíz ejecutar:

```bash
cd api
npm install
```

Renombrar el archivo `.env.example` a `.env` y modificar la variable `DATABASE_URL` con el acceso a la BD de MySQL y después ejecutar:

```bash
npx prisma migrate dev
npm start
```

Los servicios se ejecutan en [http://localhost:3001](http://localhost:3001)

## Frontend

Desde la carpeta raíz ejecutar:

```bash
cd client
npm install
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

Ya se puede empezar a usar la aplicación.
