# 03 — JavaScript Objects (JavaScript Practice)

Bloque centrado en objetos en JavaScript: acceso a propiedades (dot/bracket), creación dinámica, verificación de claves, transformación de estructuras y operaciones típicas con `Object.*`.  
Objetivo: manejar objetos con soltura y construir transformaciones realistas (limpieza de datos, merge, conteos y mapeos).

---

## ✅ Qué trabajé / reforcé
- Acceder a propiedades con dot notation (`obj.country`) y bracket notation (`obj['prop-2']`).
- Acceso dinámico usando una clave en variable (`obj[key]`).
- Comprobar si una propiedad existe en un objeto incluso si su valor es `undefined` usando `in`.
- Comprobar si una propiedad existe y además su valor es “truthy” usando `Boolean(obj[key])`.
- Crear objetos simples y objetos con claves dinámicas:
  - `{ key: value }`
  - `{ [a]: b }`
- Convertir dos arrays (keys + values) en un objeto (mapear posiciones).
- Extraer claves con `Object.keys()`.
- Acceder de forma segura a propiedades anidadas con optional chaining (`obj?.a?.b`).
- Sumar valores de un objeto con `Object.values()` + `reduce`.
- Eliminar propiedades sin mutar el objeto original usando destructuring/rest (`const { b, ...rest } = obj`).
- Combinar objetos con spread y corregir claves mal nombradas durante el merge.
- Transformar valores de un objeto con `Object.entries()` + `map()` + `Object.fromEntries()`.
- Intercambiar claves y valores (invertir un objeto) usando entries/fromEntries.
- Normalizar datos: reemplazar strings vacías o con espacios por `null` con `trim()`.
- Extraer y formatear información seleccionada de un objeto (añadir unidades `cm` y `kg`).
- Añadir una propiedad a cada objeto de un array sin mutar (map + spread).
- Convertir un array en un objeto contador de ocurrencias (frecuencias) con `reduce` y `??`.

---

## 🧠 Ideas clave
- Dot notation es directa; bracket notation es obligatoria para claves no válidas (`prop-2`) o dinámicas (`obj[key]`).
- `b in obj` comprueba existencia de clave aunque el valor sea `undefined`.
- `Boolean(obj[key])` no comprueba existencia; comprueba “truthiness” (sirve para filtros, no para existencia estricta).
- `Object.keys/values/entries` + `fromEntries` son la base para transformaciones limpias.
- Optional chaining evita errores cuando una ruta no existe: devuelve `undefined` en vez de romper.
- Spread/rest permiten trabajar sin mutar y construir objetos nuevos con cambios controlados.