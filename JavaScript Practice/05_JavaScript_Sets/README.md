# 05 — JavaScript Sets (JavaScript Practice)

Bloque centrado en `Set` en JavaScript: colección de valores **únicos** y operaciones típicas (presencia, conversión, altas/bajas y combinaciones entre sets).  
Objetivo: usar `Set` cuando la unicidad y la consulta rápida (`has`) son lo importante.

---

## ✅ Qué trabajé / reforcé
- Crear sets a partir de valores y estructuras iterables (`new Set([...])`, `new Set('123')`).
- Comprobar si un valor existe dentro de un set con `set.has(value)`.
- Convertir un set a array usando spread:
  - `[...set]`
- Eliminar un elemento de un set con `set.delete(value)` y entender que no falla si el valor no existe.
- Añadir múltiples elementos a un set iterando un array y usando `set.add(...)`.
- Plantear operaciones entre sets:
  - **unión** (valores de ambos sin duplicados)
  - **intersección** (valores comunes)

---

## 🧠 Ideas clave
- Un `Set` elimina duplicados automáticamente.
- `has()` es el equivalente a “¿está dentro?”, y es el motivo principal para usar Set.
- `new Set('123')` crea un set de caracteres (`'1'`, `'2'`, `'3'`), no el número 123.
- `delete()` modifica el set: es una operación mutante.
- Para operaciones como unión/intersección, lo estándar es construir un nuevo Set a partir de iterables.

---

> Regla interna: si el código depende de features no estándar, se documenta o se evita.