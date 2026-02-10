# 05 — DOM Recursive Functions (DOM Exercises)

Bloque centrado en **animación simple con recursividad + `setTimeout`** y control de ejecución mediante estado.  
Objetivo: entender cómo mantener una acción “viva” en el tiempo (loop) sin `for/while`, y cómo **pararla/reanudarla** con interacción del usuario.

---

## ✅ Qué trabajé / reforcé

### 1) Recursividad aplicada a UI (movimiento continuo)
- La función `move()` se llama a sí misma dentro de un `setTimeout`, generando un bucle controlado:
  - `setTimeout(() => move(...), 10)`
- Resultado: el botón se mueve 1px de forma continua.

### 2) Estado para controlar el bucle (stop / resume)
- Uso de una variable booleana (`stopped`) como “interruptor” global del movimiento.
- Si `stopped` es `true`, el bucle deja de programar el siguiente `setTimeout`.

### 3) Cálculo de límites (rebote dentro del contenedor)
- Lectura del ancho disponible:
  - `button.parentNode.clientWidth`
- Lectura de la posición actual:
  - `parseInt(button.style.left, 10) || 0`
- Cambio de dirección cuando se alcanza un borde:
  - izquierda `0`
  - derecha `width - button.clientWidth`

### 4) Interacción del usuario (click alterna estado)
- En cada click se invierte el estado:
  - `stopped = !stopped`
- Se re-lanza el movimiento llamando de nuevo a `move()` cuando toca reanudar.

---

## 🧠 Ideas clave
- Recursividad + `setTimeout` = bucle animado controlable.
- El “truco” real aquí es el **estado** (`stopped`), no la animación.
- Para animación dentro de un contenedor necesitas:
  - ancho del contenedor,
  - ancho del elemento,
  - posición actual,
  - y regla de cambio de dirección.