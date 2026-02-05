# 05 — Conditionals (JS Basics)

Bloque centrado en condicionales en JavaScript (`if`, `if...else`, `else if` y ternario).  
Objetivo: controlar el flujo de ejecución en función de condiciones y encadenar validaciones simples de forma correcta.

---

## ✅ Qué aprendí / reforcé
- Ejecutar código en función de una condición con `if`.
- Forzar que un bloque se ejecute ajustando correctamente la condición (comparaciones reales, no al azar).
- Validaciones básicas usando `.length` y operadores de comparación (ej.: contraseña demasiado corta).
- Combinar condiciones con operadores lógicos:
  - `&&` para exigir múltiples requisitos (ej.: longitud mínima y primera letra mayúscula).
- Usar `if...else` para asegurar un camino alternativo cuando la condición no se cumple.
- Encadenar más de dos casos con `else if` para cubrir escenarios por rangos.
- Corregir lógica condicional evitando `else` genéricos que rompen casos intermedios (pasar a `else if` cuando corresponde).
- Usar el operador ternario para reemplazar `if...else` en decisiones simples.
- Refactorizar un `if...else` a ternario manteniendo exactamente el mismo comportamiento.

---

## 🧠 Ideas clave
- `if` ejecuta un bloque solo si la condición es `true`; si no, no se ejecuta.
- `if...else` garantiza que **siempre** se ejecute uno de los dos bloques.
- `else if` se usa cuando hay más de dos resultados posibles; el orden de condiciones importa.
- `&&` exige que se cumplan **todas** las condiciones; es clave para validaciones (ej.: longitud + mayúscula).
- El ternario (`condición ? A : B`) es solo para casos simples; si la lógica crece, vuelve a `if...else`.
- Para checks de strings:
  - longitud: `password.length`
  - primer carácter: `password[0]`
  - comparar mayúsculas: `password[0] === password[0].toUpperCase()`