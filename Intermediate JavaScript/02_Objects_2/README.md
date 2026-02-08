# 02 — Objects II (Intermediate JavaScript)

Bloque centrado en acceso dinámico a propiedades de objetos usando **bracket notation** (`obj[key]`).  
Objetivo: trabajar con claves que no conoces en tiempo de escritura (vienen de variables, inputs o arrays de claves).

---

## ✅ Qué aprendí / reforcé
- Acceder a propiedades de un objeto de forma dinámica usando `obj[key]` cuando la clave está en una variable.
- Entender por qué `obj.propName` no sirve si `propName` es una variable: eso busca literalmente la propiedad `"propName"`.
- Crear una función genérica `getProp(obj, key)` para leer propiedades dinámicas.
- Obtener múltiples valores desde un objeto a partir de un array de claves (mapear `keys → values`).
- Implementar un “selector” de valores en un objeto (`greetings[language]`) con valor por defecto cuando no existe la clave.
- Aplicar acceso dinámico en un caso realista (buscar nota por nombre y devolver “Pass/Fail”).

---

## 🧠 Ideas clave
- **Dot notation**: `obj.name` solo funciona cuando conoces la propiedad en el código.
- **Bracket notation**: `obj[key]` es obligatorio cuando la propiedad viene en una variable o se construye dinámicamente.
- Si la clave no existe, `obj[key]` devuelve `undefined`. Por eso se usan valores por defecto:
  - `obj[key] || defaultValue` (en casos simples)
- Mapear claves a valores es un patrón directo: `keys.map(k => obj[k])`.