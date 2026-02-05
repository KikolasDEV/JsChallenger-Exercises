# 06 — Functions (JS Basics)

Bloque centrado en funciones en JavaScript: declaración, llamada, retorno y parámetros.  
Objetivo: escribir funciones simples correctamente y empezar a usarlas para evitar código duplicado.

---

## ✅ Qué aprendí / reforcé
- Declarar funciones con `function` y ejecutarlas llamándolas con `()`.
- Diferenciar entre:
  - **referenciar** una función (`func`)
  - y **ejecutarla** (`func()`).
- Entender que una función devuelve `undefined` si no tiene `return`.
- Devolver valores correctamente y evitar `return` prematuros que cortan el flujo de la función.
- Corregir funciones con:
  - palabra clave `function` faltante,
  - nombre faltante en la declaración,
  - parámetros faltantes o en orden incorrecto.
- Trabajar con parámetros y argumentos:
  - una función con 1 parámetro (cuadrado),
  - una función con 2 parámetros (multiplicar/sumar/restar),
  - pasar el número correcto de argumentos para evitar `undefined`.
- Usar `return` condicional (early return) para salir de la función cuando no se cumple una condición.
- Implementar funciones de lógica simple:
  - comprobar mayoría de edad,
  - comprobar string vacío,
  - comprobar fin de semana.
- Refactorizar lógica repetida creando funciones reutilizables:
  - aplicar descuento con porcentaje,
  - calcular total con impuesto.

---

## 🧠 Ideas clave
- Para ejecutar una función necesitas paréntesis: `func()`; si haces `const r = func`, estás guardando la función, no su resultado.
- Sin `return`, el resultado de la función es `undefined`.
- El código después de un `return` no se ejecuta: el `return` corta la función.
- Si declaras parámetros `(a, b)`, debes pasar argumentos suficientes; si falta alguno, será `undefined`.
- El orden de parámetros importa (ej.: restar `a - b` no es lo mismo que `b - a`).
- Las funciones se usan para evitar duplicación: si copias el mismo cálculo 3 veces, es señal de que necesitas una función.