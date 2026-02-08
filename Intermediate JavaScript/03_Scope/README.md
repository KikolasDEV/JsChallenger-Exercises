# 03 — Scope (Intermediate JavaScript)

Bloque centrado en alcance de variables (scope) en JavaScript: **función**, **bloque** y variables globales.  
Objetivo: entender qué variables son accesibles dónde, evitar “shadowing” accidental y actualizar valores en el scope correcto.

---

## ✅ Qué aprendí / reforcé
- Entender que una variable declarada dentro de una función no es accesible desde fuera (scope de función).
- Guardar correctamente el resultado de una función usando su `return` (asignar `total = calculatePrice()`).
- Diferenciar entre actualizar una variable global y crear una variable local con el mismo nombre (shadowing).
- Modificar una variable global desde una función evitando redeclararla dentro (no usar `let x` dentro si quiero tocar la global).
- Prioridad de scopes:
  - una variable local puede “tapar” a una global si comparten nombre.
- Usar scope de bloque `{ ... }` con `const/let` para variables temporales (ej.: un `y` dentro del bloque distinto al `y` global).
- Asegurar que el cálculo use el valor del bloque cuando corresponde (realizar la operación dentro del bloque).
- Actualizar una variable global desde un bloque evitando redeclaración local.

---

## 🧠 Ideas clave
- Si una variable está dentro de una función, fuera no existe: solo puedes sacar su valor con `return`.
- Si declaras `let x` dentro de un bloque o función, estás creando **otra** `x` (no estás cambiando la de fuera).
- Para usar un valor de un bloque (`{ const y = ... }`) en un cálculo, el cálculo debe ocurrir dentro del bloque o el valor debe almacenarse fuera.
- El scope no es teoría: es la diferencia entre código que funciona y bugs silenciosos.