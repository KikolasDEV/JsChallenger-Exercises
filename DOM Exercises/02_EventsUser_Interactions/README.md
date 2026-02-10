# 02 — Events & User Interactions (DOM Exercises)

Bloque centrado en **eventos del DOM** y cómo reaccionar a interacciones del usuario.  
Objetivo: conectar UI con lógica mediante `addEventListener`, entender tipos de eventos y manipular el DOM/estilos en respuesta.

---

## ✅ Qué trabajé / reforcé

### 1) Click (acción directa)
- Registrar un listener con `addEventListener('click', ...)`.
- Ejecutar una función que modifica el estado visible (rellenar un input con `"Hello World"`).

### 2) Hover / Mouseover (entrada del cursor)
- Ejecutar lógica cuando el cursor entra en un elemento con `mouseover`.
- Modificar texto dinámicamente usando `element.innerText`.

### 3) Entrada y salida del cursor (dos eventos, una misma función)
- Reutilizar una función (`toggleColor`) para dos escenarios:
  - `mouseover` → entrar (activar estado)
  - `mouseout` → salir (desactivar estado)
- Pasar parámetros distintos al callback usando funciones anónimas:
  - `() => toggleColor(true)`
  - `() => toggleColor(false)`

### 4) Movimiento del ratón (evento de alta frecuencia)
- Escuchar `mousemove` dentro de un contenedor y ejecutar lógica en cada movimiento.
- Mover un elemento 1px a la derecha usando:
  - `element.style.left`
  - `parseInt(...)` para convertir string → número
  - `getBoundingClientRect()` para calcular límites reales
- Evitar que el elemento se salga del contenedor comparando ancho del wrapper vs ancho del elemento.

### 5) Drag & Drop (interacción avanzada)
- Permitir “drop” usando `dragover` + `event.preventDefault()`.
- Responder al evento `drop` y “unir” elementos con `append()` para que el item se quede dentro del contenedor.
- Entender el flujo mínimo del drag & drop:
  - `dragover` habilita el drop
  - `drop` ejecuta la acción final

---

## 🧠 Ideas clave
- `addEventListener(evento, callback)` es el punto de conexión entre UI y lógica.
- Algunos eventos necesitan preparación:
  - sin `preventDefault()` en `dragover`, el `drop` no funciona.
- Para pasar argumentos a una función en un listener, no se llama directamente:
  - ✅ `() => miFunc(arg)`
  - ❌ `miFunc(arg)` (se ejecutaría al instante)
- Eventos como `mousemove` se disparan muchas veces: aquí importa que la lógica sea simple y segura.
- DOM real = estado + render:
  - en estos ejercicios el “estado” se refleja en `value`, `innerText` o `style`.