# 04 — DOM Fundamentals (DOM Exercises)

Bloque centrado en fundamentos prácticos del DOM: **leer/escribir valores**, **actualizar UI**, **trabajar con eventos comunes** y **filtrar elementos en pantalla**.  
Objetivo: empezar a construir “comportamiento” real en una interfaz con JavaScript (sin frameworks).

---

## ✅ Qué trabajé / reforcé

### 1) Controlar propiedades de elementos (checkbox)
- Selección directa por `id` y modificación de una propiedad del DOM:
  - `checkbox.checked = true`
- Idea: el DOM no solo es texto, también son **propiedades**.

### 2) Leer inputs y escribir outputs (full name)
- Lectura de `value` desde dos inputs y escritura en un tercero.
- Concatenación con espacio para formar un resultado usable:
  - `fullName.value = firstName.value + ' ' + lastName.value`
- Esto introduce el flujo clásico: **input → transformación → output**.

### 3) UI con estado numérico (contador)
- Incrementar un valor visible (texto del botón) en cada click.
- Conversión necesaria:
  - `parseInt(button.innerText, 10)` para pasar de string a number.
- Actualización de UI:
  - `button.innerText = count + 1`

### 4) Filtrado dinámico en tiempo real (input + lista)
- Escuchar el evento `input` (no “change”), para reaccionar en cada tecla.
- Iterar lista (`querySelectorAll`) y ocultar/mostrar según coincidencia:
  - `li.hidden = true/false`
- Patrón real: **búsqueda live** sin recargar la página.

### 5) Delegación de eventos (reventar globos)
- Un solo listener en el contenedor (`#list`) para actuar sobre muchos hijos.
- Validación del target para no aplicar el efecto al propio contenedor.
- Cambiar estilo para ocultar el elemento:
  - `event.target.style.visibility = 'hidden'`

---

## 🧠 Ideas clave
- DOM = propiedades + eventos + estado visual.
- `value` es para inputs; `innerText` para texto visible en elementos.
- Si hay números en UI, casi siempre necesitas convertir string → number (`parseInt`).
- `input` es el evento correcto para filtros en vivo.
- Delegación de eventos (listener en padre) simplifica el código cuando hay muchos elementos hijos.