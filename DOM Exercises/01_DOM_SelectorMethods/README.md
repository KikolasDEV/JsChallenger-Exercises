# 01 — DOM Selector Methods (DOM Exercises)

Bloque centrado en **seleccionar elementos del DOM** correctamente para poder manipularlos y añadirles comportamiento.  
Objetivo: dejar de “tirar de suerte” con el DOM y elegir el selector adecuado según el contexto (id único, descendientes, listas, exclusiones).

---

## ✅ Qué trabajé / reforcé

### 1) Selección por `id` (caso ideal)
- Uso de `document.getElementById()` cuando el elemento tiene un identificador único.
- Base para interactuar con el elemento (ej.: click y toggle de texto).

### 2) Selección por descendencia (cuando no hay `id`)
- Uso de `document.querySelector()` con selectores CSS para seleccionar elementos **dentro de un contenedor**.
- Patrón típico: `#wrapper button` / `#wrapper input` cuando la estructura define el contexto.

### 3) Selección múltiple (NodeList)
- Uso de `document.querySelectorAll()` para capturar **varios elementos** (ej.: lista de `<li>`).
- Iteración sobre NodeList con `forEach` para registrar listeners en masa.

### 4) Selección + exclusión (filtrado desde el selector)
- Uso de pseudo-clase `:not(...)` para excluir elementos desde el propio selector.
- Patrón: seleccionar “todos menos X” sin tener que filtrar manualmente después.

---

## 🧠 Ideas clave
- **Si hay `id`, se usa `getElementById`**: es el camino más directo y legible.
- `querySelector()` devuelve **un solo elemento** (el primero que coincide).
- `querySelectorAll()` devuelve **una lista (NodeList)**, ideal para listas y acciones en lote.
- Seleccionar “por contexto” (ej.: `#wrapper input`) evita depender de la posición o del “primer input que encuentre”.
- Usar `:not()` es más limpio que seleccionar todo y filtrar luego cuando la regla de exclusión está clara.

---

## ✅ Qué demuestra este bloque
- Que sabes **localizar elementos** con precisión.
- Que puedes **trabajar con colecciones** del DOM (no solo con un elemento suelto).
- Que entiendes selectores CSS lo suficiente como para escribir DOM code más profesional.