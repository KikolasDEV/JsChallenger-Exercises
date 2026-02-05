# 03 — Operators (JS Basics)

Bloque centrado en operadores de JavaScript: comparación, lógicos y aritméticos.  
Objetivo: dominar evaluaciones (`true/false`) y cálculos básicos sin errores de operadores ni de tipos.

---

## ✅ Qué aprendí / reforcé
- Usar operadores de comparación:
  - Igualdad y desigualdad (`==`, `!=`)
  - Comparaciones numéricas (`>`, `<`, `>=`, `<=`)
- Entender la diferencia entre:
  - Igualdad “no estricta” (`==`) vs igualdad estricta (`===`)
  - Desigualdad estricta (`!==`) vs desigualdad “no estricta” (`!=`)
- Encadenar condiciones con operadores lógicos:
  - AND (`&&`) → ambas condiciones deben ser `true`
  - OR (`||`) → basta con que una condición sea `true`
- Aplicar operadores aritméticos para comprobar resultados:
  - Suma (`+`), resta (`-`), multiplicación (`*`), división (`/`)
  - Exponenciación (`**`)
  - Resto/módulo (`%`)

---

## 🧠 Ideas clave
- `==` compara valores con coerción de tipos; `===` compara **valor y tipo**. Por norma, usa `===`.
- `&&` solo da `true` si **todas** las condiciones son `true`. `||` da `true` si **alguna** lo es.
- `>=` y `<=` incluyen el caso de igualdad.
- El operador `%` devuelve el **resto** de una división.
- En comparaciones, pequeños errores de operador (`>=` vs `<=`) cambian totalmente el resultado: revisa el símbolo antes de ejecutar.