# 05 — Asynchronous JS (Intermediate JavaScript)

Bloque centrado en asincronía en JavaScript: ejecución síncrona vs asíncrona, callbacks, Promises y coordinación de tareas con `then()`.  
Objetivo: entender el orden real de ejecución y controlar cuándo ocurre cada operación (sin suposiciones).

---

## ✅ Qué aprendí / reforcé
- Diferenciar ejecución **síncrona** (se ejecuta inmediatamente) de ejecución **asíncrona** (se programa para después).
- Entender que `setTimeout` no “espera” bloqueando el programa: agenda una ejecución futura.
- Forzar un comportamiento síncrono llamando a la función directamente cuando se necesita resultado inmediato.
- Controlar el orden esperado en asincronía:
  - primero se imprime el valor actual,
  - después se modifica/imprime el valor tras el `setTimeout`.
- Usar callbacks correctamente:
  - pasar una función como argumento,
  - ejecutarla dentro del `setTimeout`,
  - garantizar que el cambio de estado ocurra antes del `console.log`.
- Aplicar callbacks en un caso con estado compartido:
  - modificar `a` dentro de un `setTimeout`,
  - ejecutar después una función que depende de `a` (callback).
- Crear y resolver Promises correctamente:
  - usar `resolve(valor)` en lugar de `return valor`.
- Resolver una Promise con el resultado de una operación asíncrona dentro de `setTimeout`.
- Esperar a que una Promise se resuelva antes de ejecutar lógica dependiente (ej.: `multiply(data)` solo tras `then()`).

---

## 🧠 Ideas clave
- El problema típico en asincronía no es “sintaxis”: es **orden de ejecución**.
- `setTimeout(func, 1000)` agenda `func` para más tarde; el código de debajo se ejecuta antes.
- Un callback es la forma más directa de asegurar “haz esto cuando termine aquello”.
- Una Promise solo “entrega” un valor si llamas a `resolve(valor)`.
- `then(...)` es el punto de sincronización: lo que pongas ahí se ejecuta cuando la Promise está resuelta.
- Si ejecutas lógica dependiente antes de `then`, estarás usando valores antiguos (estado no actualizado).

---

## ➕ Extra: `async/await` 
- `async/await` es azúcar sintáctico sobre Promises.
- Permite escribir flujo asíncrono con estilo más “lineal”:
  - `await` espera a que una Promise se resuelva antes de continuar.
- Regla básica: `await` solo se puede usar dentro de una función `async`.