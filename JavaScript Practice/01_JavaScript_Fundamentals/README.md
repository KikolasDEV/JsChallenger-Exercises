# 01 — JavaScript Fundamentals (JavaScript Practice)

Bloque centrado en fundamentos prácticos de JavaScript: operaciones básicas, comparaciones, tipos, manipulación de strings y lógica numérica.  
Objetivo: reforzar soltura con expresiones, métodos básicos y pequeños problemas típicos sin depender de “magia”.

---

## ✅ Qué trabajé / reforcé
- Operaciones numéricas básicas:
  - suma de dos números
  - cálculo de porcentajes
  - composición de operaciones respetando el orden y uso de `**`
- Comparaciones estrictas:
  - igualdad real con tipo y valor (`===`)
- Tipos en JavaScript:
  - uso de `typeof` y entender casos “especiales” como `null` y arrays
- Manipulación básica de strings:
  - obtener el carácter n (`n - 1`)
  - quitar/extraer primeros o últimos N caracteres (`slice`)
  - localizar un substring (`indexOf`)
  - extraer mitad de un string
  - eliminar los últimos N caracteres
- Búsqueda y composición de strings:
  - comprobar si un string contiene otro (`includes`)
  - concatenar según condición (si contiene → prefijo; si no → sufijo)
- Lógica con números:
  - comprobar si un número es par (`% 2`)
  - contar apariciones de un carácter en un string
  - comprobar si un número es entero (sin decimales)
  - multiplicar o dividir según comparación (`a < b ? a/b : a*b`)
  - redondear a 2 decimales (`toFixed`)
  - separar un número en dígitos (string → array → Number)
- Problemas de lógica más “de práctica”:
  - reconstruir palabras manipulando strings (replace + reverse + capitalización)
  - siguiente número primo (si no es primo, buscar el siguiente)
  - siguiente múltiplo de `y` mayor o igual que `x`
  - insertar separador cada N caracteres desde el final
  - “incrementar” letras usando códigos ASCII/Unicode (`charCodeAt` / `fromCharCode`)

---

## 🧠 Ideas clave
- Para índices humanos (1..n), en arrays/strings hay que convertir a índice real: `n - 1`.
- `slice` es la herramienta principal para cortar strings sin mutarlos.
- `typeof null` devuelve `"object"` (peculiaridad histórica del lenguaje).
- `toFixed(2)` devuelve string: si quieres número, conviertes con `Number(...)`.
- Muchas tareas se vuelven simples al pasar de número → string → array, y luego volver si hace falta.
- Para transformaciones de letras, `charCodeAt` + `fromCharCode` es una técnica útil.