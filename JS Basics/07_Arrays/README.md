# 07 — Arrays (JS Basics)

Bloque centrado en arrays en JavaScript: creación, acceso por índice, longitud y modificaciones básicas.  
Objetivo: manejar listas de datos con seguridad (índices correctos, último elemento, cambios controlados).

---

## ✅ Qué aprendí / reforcé
- Crear arrays con valores y verificar su tamaño usando `.length`.
- Crear arrays con distintos tipos (string, number, boolean) y entender que JS permite tipos mezclados.
- Acceder a elementos por índice:
  - primer elemento (`arr[0]`)
  - elemento intermedio en un array de 3 (`arr[1]`)
- Obtener el último elemento de cualquier array usando `arr[arr.length - 1]` (incluido dentro de una función reutilizable).
- Calcular elementos restantes después de modificar un array con:
  - `pop()` (elimina el último)
  - `shift()` (elimina el primero)
  y validar el resultado con `.length`.
- Modificar un elemento concreto asignando por índice (`arr[i] = ...`).
- Construir arrays incluyendo variables y arrays anidados (array dentro de array).
- Encontrar posiciones con `indexOf()` y usar ese índice para acceder al elemento.
- Añadir elementos al final con `push()` y comprobar longitud/posiciones.
- Intercambiar valores en posiciones específicas (primer y último elemento).
- Crear una función genérica para actualizar un array en un índice dado y devolverlo.

---

## 🧠 Ideas clave
- `.length` es el número de elementos del array (no el último índice).
- Los arrays son **0-indexados**: el primer elemento siempre es `arr[0]`.
- El último elemento se obtiene con `arr[arr.length - 1]`, no con `arr[arr.length]`.
- `pop()` elimina el último elemento y `shift()` elimina el primero (ambos modifican el array).
- `indexOf(x)` devuelve el índice de `x` o `-1` si no existe.
- `push(x)` añade al final y cambia `.length`.
- Asignar por índice (`arr[i] = val`) modifica el array directamente.