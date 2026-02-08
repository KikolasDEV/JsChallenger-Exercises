# 04 — Functions II (Intermediate JavaScript)

Bloque centrado en funciones modernas en JavaScript: **rest parameters** (`...`) y **arrow functions**.  
Objetivo: escribir funciones más concisas, aceptar número variable de argumentos y entender bien qué estás recibiendo en cada caso.

---

## ✅ Qué aprendí / reforcé
- Convertir un parámetro normal en **rest parameter** (`...x`) para capturar múltiples argumentos como un array.
- Usar `.length` sobre un rest parameter para contar cuántos argumentos llegaron realmente.
- Ajustar la firma de una función para que el acumulador sume exactamente los argumentos deseados (eliminando parámetros innecesarios).
- Transformar una función expresión en una **arrow function** manteniendo la lógica intacta.
- Simplificar una arrow function usando:
  - retorno implícito (sin `{}` y sin `return`)
  - eliminación de paréntesis cuando hay un único parámetro.
- Crear arrow functions desde cero con 2 parámetros (sumar).
- Combinar arrow functions con rest parameters para:
  - recibir un primer argumento fijo (`x`)
  - y el resto en un array (`...arr`)
  - procesar ese array y devolver un resultado nuevo.

---

## 🧠 Ideas clave
- Un rest parameter (`...args`) siempre recoge el resto de argumentos en un **array**.
- `func(2,3)` con `function func(...x)` hace que `x` sea `[2,3]` y `x.length` sea `2`.
- En arrow functions:
  - si usas `{}`, necesitas `return`.
  - si NO usas `{}`, el retorno es implícito.
- La firma correcta (parámetros) define el comportamiento: si sobran o faltan parámetros, el resultado cambia.
- Rest parameter debe ir **siempre al final** de la lista de parámetros (regla del lenguaje).