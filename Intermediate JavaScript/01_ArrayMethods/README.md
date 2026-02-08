# 01 — Array Methods (Intermediate JavaScript)

Bloque centrado en iteración moderna y métodos esenciales de arrays en JavaScript.  
Objetivo: dejar atrás bucles manuales cuando no aportan valor y dominar métodos declarativos para **buscar, transformar, filtrar, validar y acumular** datos.

---

## ✅ Qué aprendí / reforcé

### Iteración moderna
- Sustituir `for` clásico por `for...of` para recorrer arrays cuando solo necesito el valor.
- Recorrer arrays y construir resultados de forma clara sin tocar índices si no hacen falta.

### Búsqueda: `find`
- Usar `find()` para obtener el **primer** elemento que cumple una condición.
- Aplicarlo tanto en arrays de números (primer par) como en arrays de objetos (usuario con `id` o primer `active: true`).

### Transformación: `map`
- Usar `map()` para generar un nuevo array transformado (dobles, cuadrados, longitudes).
- Transformar arrays de objetos sin mutar el original usando spread:
  - añadir propiedades (`isActive`)
  - añadir propiedades calculadas (`isAdult`)
- Usar el segundo parámetro de `map` (`index`) para generar valores dependientes de la posición.

### Filtrado: `filter`
- Usar `filter()` para quedarme con elementos que cumplen una condición:
  - números >= 10
  - strings con longitud > X
  - pares con `%`
  - objetos “activos”
- Combinar `filter()` con `includes()` para obtener la intersección de dos arrays.

### Inclusión: `includes`
- Determinar si un array contiene un valor concreto (`hasFruit`).
- Usarlo como soporte para filtros (pertenencia en otro array).

### Iteración con efecto: `forEach`
- Acumular valores (sumar pares).
- Construir arrays derivados sin mutar el original (toggled booleans).
- Contar ocurrencias de un valor.
- Construir un string final concatenando caracteres bajo condición (solo mayúsculas).

### Predicados: `some` y `every`
- `some()` para comprobar si existe al menos un elemento que cumple una condición:
  - algún negativo
  - algún booleano en array mixto
- `every()` para comprobar si todos cumplen:
  - validar extensiones de archivos de imagen con `endsWith`.

### Reducción: `reduce`
- Usar `reduce()` para acumular resultados:
  - suma total del array
  - máximo del array

---

## 🧠 Ideas clave
- `find` devuelve **un elemento** (o `undefined`), no un array.
- `map` transforma y devuelve un array del mismo tamaño.
- `filter` devuelve un array con **cero o más** elementos.
- `forEach` no devuelve resultado útil: se usa para efectos (acumular, loguear, empujar a otro array).
- `some` / `every` son perfectos para validaciones (existencia / todo cumple).
- `reduce` sirve para sumar, max/min, y acumulaciones más complejas, pero hay que definir bien el acumulador.

---

## 🔥 Señales de nivel (lo que este bloque demuestra)
- Cambio de mentalidad: de “bucle e índices” a “intención”:
  - buscar (`find`)
  - transformar (`map`)
  - filtrar (`filter`)
  - validar (`some/every`)
  - acumular (`reduce`)
- En objetos: evitar mutaciones cuando se pretende “crear una versión nueva” (`{ ...obj, prop: value }`).

---

## ✅ Notas rápidas
- Si puedes resolverlo con `map/filter/find`, hacerlo con `for` suele ser más código y más puntos de fallo.
- Si tu `map` modifica el objeto original, has perdido: usa spread para clonar.
- Ojo con `find(...).name`: si no hay match, `find` devuelve `undefined` y eso rompe. (En ejercicios controlados vale; en código real, no.)