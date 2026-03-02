# 02 — JavaScript Arrays (JavaScript Practice)

Bloque centrado en operaciones comunes con arrays en JavaScript: acceso por índice, extracción de segmentos, filtrado, ordenación y agregaciones.  
Objetivo: dominar transformaciones típicas de datos en arrays usando métodos estándar (`slice`, `filter`, `sort`, `reduce`) y patrones reutilizables.

---

## ✅ Qué trabajé / reforcé
- Acceder a un elemento por posición “n” (con n empezando en 1) y transformarlo a índice real (`n - 1`).
- Extraer partes de un array sin mutarlo usando `slice()`:
  - quitar los primeros N elementos,
  - obtener los primeros N,
  - obtener los últimos N (incluyendo `slice(-n)`).
- Devolver los últimos N elementos de forma genérica (`slice(-n)`).
- Eliminar elementos concretos por valor usando `filter()` (quitar todos los iguales a `b`).
- Contar elementos:
  - total (`.length`),
  - negativos (filtrar y contar).
- Ordenar arrays:
  - strings alfabéticamente (`sort()`),
  - números descendentes con comparador (`sort((a,b) => b-a)`).
- Calcular agregados con `reduce()`:
  - suma total,
  - promedio (suma / length),
  - string más largo.
- Comprobar si todos los elementos son iguales usando `Set` (`new Set(arr).size === 1`).
- Unir un número variable de arrays usando rest parameters y `flat()`.
- Ordenar arrays de objetos por una propiedad (`a.b - b.b`).
- Fusionar dos arrays eliminando duplicados (Set) y ordenando el resultado.
- Sumar solo elementos que cumplan una condición (mayores que `b`) usando `reduce`.
- Crear un rango numérico con un bucle `for` (min → max).
- Agrupar strings por su primera letra devolviendo un objeto (reduce + claves dinámicas).

---

## 🧠 Ideas clave
- `slice()` no muta el array original; es ideal para extraer segmentos.
- `filter()` es la forma estándar de “quitar elementos por condición” sin mutar.
- `sort()` muta el array; para números necesitas comparador.
- `reduce()` sirve para acumulaciones (sumas, máximos, agrupaciones), pero hay que controlar bien el acumulador.
- `Set` es útil para unicidad y para checks tipo “¿todos iguales?” o “merge sin duplicados”.
- En tareas de agrupación, las claves dinámicas (`{ [key]: value }`) son fundamentales.