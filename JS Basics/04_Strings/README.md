# 04 — Strings (JS Basics)

Bloque centrado en creación, concatenación y manipulación básica de strings en JavaScript.  
Objetivo: dominar operaciones comunes con strings (longitud, indexado, comparación y template literals) sin errores de índices ni de mayúsculas/minúsculas.

---

## ✅ Qué aprendí / reforcé
- Crear strings usando comillas simples (`' '`), dobles (`" "`) y backticks (`` ` ` ``).
- Verificar que strings creados con comillas distintas pueden ser iguales si el contenido es el mismo (`===`).
- Concatenar strings:
  - con `+` y espacios controlados,
  - y con template literals usando `${...}`.
- Usar `.length` para obtener longitud y basar lógica en ella (por ejemplo, “más largo que 5”).
- Indexar strings:
  - primer carácter con `str[0]`,
  - último carácter con `str[str.length - 1]`,
  - carácter en posición `n` con `str[n]`.
- Comparar strings teniendo en cuenta que la comparación es **case-sensitive**.
- Normalizar strings con:
  - `.toUpperCase()`
  - `.toLowerCase()`
- Aplicar comparación case-insensitive normalizando antes (`toLowerCase()` / `toUpperCase()`).
- Validaciones básicas con strings:
  - comprobar si contiene un carácter usando `includes()` (por ejemplo, validar que un email contiene `@`).
- Confirmar que `includes()` también es case-sensitive y cómo solucionarlo (normalizando antes).

---

## 🧠 Ideas clave
- Tres formas de crear strings: `'...'`, `"..."` y `` `...` ``; la última permite interpolación con `${}`.
- `+` concatena strings, pero tú controlas los espacios (`'Hello' + ' ' + 'World'`).
- `.length` devuelve el número de caracteres; el último índice siempre es `length - 1`.
- Los strings son **0-indexados**: el primer carácter es `str[0]`.
- Las comparaciones (`===`) y `includes()` son **case-sensitive**.
- Para comparar “sin importar mayúsculas”, normaliza antes:
  - `a.toLowerCase() === b.toLowerCase()`
- Para transformar texto:
  - `toUpperCase()` y `toLowerCase()` no modifican el original: devuelven un nuevo string.
- Template literals permiten:
  - insertar variables: `` `Hello, ${name}` ``
  - insertar expresiones: `` `${a + b}` `` (no escribir `1+1` literal si quieres el resultado).