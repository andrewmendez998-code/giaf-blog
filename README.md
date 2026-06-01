# GIAF Blog — Grupo de Investigación en Anatomía Funcional

Blog académico del GIAF · UANL · FOD × Medicina

## Stack
- **Astro 4** — framework para sitios estáticos
- **Tailwind CSS** — estilos utilitarios
- **Vercel** — deployment

## Cómo arrancar en VS Code

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (abre localhost:4321)
npm run dev

# 3. Build para producción
npm run build
```

## Estructura del proyecto

```
src/
├── layouts/
│   └── BaseLayout.astro       ← Nav + Footer compartidos
├── pages/
│   ├── index.astro            → giaf.com/
│   ├── articulos/
│   │   ├── index.astro        → giaf.com/articulos
│   │   └── [slug].astro       → giaf.com/articulos/nombre
│   ├── noticias/
│   │   └── index.astro        → giaf.com/noticias
│   ├── conocenos.astro        → giaf.com/conocenos
│   └── involucrate.astro      → giaf.com/involucrate
└── styles/
    └── global.css             ← Todos los estilos
```

## Cómo agregar un artículo nuevo

Duplica el archivo `src/pages/articulos/tendon-aquiles-biomecanica.astro`
y edita el contenido. Así de simple.

## Deploy en Vercel

1. Sube el proyecto a GitHub
2. Entra a vercel.com → Import Project → selecciona el repo
3. Vercel detecta Astro automáticamente y hace el deploy

---
GIAF · UANL 2025
