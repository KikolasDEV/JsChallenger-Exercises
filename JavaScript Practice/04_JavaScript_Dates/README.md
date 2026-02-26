# 04 — JavaScript Dates (JavaScript Practice)

Bloque centrado en `Date` en JavaScript: comparaciones, diferencias de tiempo, validaciones por día/hora y cálculos con unidades (días, horas, minutos, segundos).  
Objetivo: trabajar con fechas correctamente sin caer en comparaciones falsas o cálculos erróneos.

---

## ✅ Qué trabajé / reforcé
- Comparar dos fechas correctamente:
  - igualdad real usando `getTime()` (milisegundos desde epoch).
- Calcular diferencia entre dos fechas en días usando diferencia absoluta y conversión de ms → días.
- Comprobar si dos fechas caen en el mismo día (año/mes/día) sin importar la hora.
- Verificar si dos fechas están a 1 hora (o menos) de diferencia.
- Comprobar si una fecha es anterior a otra usando comparación directa (`a < b`).
- Sumar días a una fecha existente usando `setDate()` y devolver el timestamp resultante.
- Obtener la diferencia en formato `{ hrs, min, sec }` a partir de milisegundos.
- Redondear al siguiente “cuarto de hora” (15 min) en base a la hora/minutos de un `Date`.

---

## 🧠 Ideas clave
- `Date` se puede comparar, pero para igualdad exacta lo correcto es comparar timestamps (`getTime()`).
- Restar fechas (`a - b`) devuelve milisegundos; todo lo demás es conversión de unidades.
- “Mismo día” no significa mismo timestamp: hay que comparar `getFullYear()`, `getMonth()` y `getDate()`.
- `setDate()` modifica la instancia de Date (mutación) y devuelve milisegundos.
- En cálculos con tiempo, la unidad base es ms:
  - 1000 ms = 1 s
  - 60 s = 1 min
  - 60 min = 1 h
  - 24 h = 1 día
- Para bloques de tiempo (hrs/min/sec), lo importante es descomponer el total en unidades con `Math.floor` y restos.
- Los redondeos a intervalos (15 min) se pueden resolver con “bloques” en milisegundos.