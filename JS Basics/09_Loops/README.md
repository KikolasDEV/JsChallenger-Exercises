# 09 — Loops (JS Basics)

Bloque centrado en bucles en JavaScript: `for`, `while` y control de flujo con `break`.  
Objetivo: iterar con seguridad sobre rangos y arrays, acumulando resultados sin caer en bucles infinitos.

---

## ✅ Qué aprendí / reforcé
- Usar `for` con contador para:
  - recorrer un rango numérico,
  - acumular resultados (sumas) dentro de un bucle.
- Recorrer arrays con `for` usando `i` y `array.length`.
- Filtrar elementos de un array en otro array usando:
  - `typeof` para comprobar tipos,
  - `push()` para construir un nuevo array.
- Transformar arrays generando uno nuevo (ej.: multiplicar cada número por 2).
- Calcular agregados con condición (ej.: sumar solo números pares usando `%`).
- Interrumpir un bucle antes de terminar usando `break` cuando se cumple una condición.
- Usar `while` para repetir una operación mientras una condición sea verdadera.
- Controlar bucles `while` con una condición correcta para llegar a un valor objetivo.
- Doblar un valor de forma iterativa hasta superar un umbral.

---

## 🧠 Ideas clave
- En un `for`, el patrón estándar para arrays es: `for (let i = 0; i < arr.length; i++)`.
- `.length` marca el límite correcto; si te pasas, accedes a `undefined`.
- `break` termina el bucle inmediatamente cuando se ejecuta (ideal para cortar al detectar un caso no válido).
- `while` es útil cuando no sabes exactamente cuántas iteraciones necesitas; la condición debe estar bien definida.
- Riesgo principal: **bucle infinito** si la condición nunca deja de cumplirse o si no actualizas el contador/variable.
- Filtrar/transformar suele hacerse creando un array nuevo y usando `push()` dentro del bucle.