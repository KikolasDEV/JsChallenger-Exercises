# 02 — Booleans (JS Basics)

Bloque centrado en valores booleanos (`true/false`) y conversiones a booleano en JavaScript.  
Objetivo: entender cómo se representan condiciones y evitar confusiones con *truthy/falsy*.

---

## ✅ Qué aprendí / reforcé
- Declarar una variable booleana y asignarle un valor (`true` / `false`).
- Diferenciar entre “variable declarada sin valor” y “variable con valor booleano”.
- Convertir un número a booleano con `Boolean(value)`.
- Forzar un resultado booleano controlando el valor original (ej.: `0` → `false`).

---

## 🧠 Ideas clave
- `Boolean(x)` devuelve `false` para valores *falsy* y `true` para valores *truthy*.
- `0` es *falsy* → `Boolean(0)` devuelve `false`.
- La conversión explícita con `Boolean()` deja clara la intención y evita coerciones raras.
- Para condiciones, lo importante es entender el valor lógico real, no “adivinar” qué será `true` o `false`.