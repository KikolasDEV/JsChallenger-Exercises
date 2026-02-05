# 08 — Objects (JS Basics)

Bloque centrado en objetos en JavaScript: creación, acceso a propiedades y modificación del objeto.  
Objetivo: manejar estructuras clave-valor con soltura (leer, añadir, actualizar y borrar propiedades).

---

## ✅ Qué aprendí / reforcé
- Leer valores de un objeto accediendo a sus propiedades (ej.: `animal.lifespan`).
- Crear objetos con múltiples propiedades desde cero.
- Crear objetos a partir de parámetros de una función (devolver `{ name, age }`).
- Construir objetos con propiedades calculadas a partir de lógica (ej.: `isAdult` o `isPositive`).
- Añadir propiedades a un objeto existente usando dot notation (`person.age = 30`).
- Actualizar el valor de una propiedad ya existente (cambiar `age`).
- Modificar un objeto desde una función (mutación controlada) sin necesidad de devolverlo.
- Crear una propiedad derivada combinando otras (ej.: `fullName` a partir de `firstName` + `lastName`).
- Eliminar propiedades con el operador `delete`.

---

## 🧠 Ideas clave
- Un objeto es una colección de pares **clave: valor**.
- Acceder a propiedades con dot notation: `obj.prop`.
- Añadir/actualizar propiedades es asignación directa: `obj.prop = value`.
- Puedes devolver un objeto desde una función para construir estructuras a partir de inputs.
- Las propiedades pueden depender de cálculos o lógica (no solo “copiar” parámetros).
- `delete obj.prop` elimina una propiedad: al acceder después, el valor será `undefined`.