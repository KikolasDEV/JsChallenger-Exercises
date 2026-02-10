# 03 — DOM Manipulation (DOM Exercises)

Bloque centrado en **manipular el DOM de forma directa**: eliminar nodos, crear elementos, asignar atributos y reestructurar el árbol DOM.  
Objetivo: pasar de “seleccionar y escuchar eventos” a **modificar estructura real** de la página (nodos y jerarquía).

---

## ✅ Qué trabajé / reforcé

### 1) Eliminar un nodo del DOM (de verdad)
- Seleccionar un elemento (`#red`) y **removerlo del árbol**, no ocultarlo con CSS.
- Uso de patrón clásico:
  - `parentNode.removeChild(child)`
- Resultado: el elemento deja de existir y el círculo verde se vuelve visible.

### 2) Asignar/modificar atributos (id dinámico)
- Añadir un `id` a un elemento existente para que el resto del código pueda seleccionarlo.
- Uso de:
  - `setAttribute('id', 'inputEl')`
- Importante: el listener depende de que ese `id` exista para que `querySelector('#inputEl')` funcione.

### 3) Envolver un elemento existente (wrap)
- Crear un contenedor nuevo (`div#wrapper`) y reestructurar el DOM para que el botón pase a ser su hijo.
- Métodos utilizados:
  - `document.createElement()`
  - `setAttribute()`
  - `insertBefore()` para insertar el wrapper en el lugar correcto
  - `append()` para mover el botón dentro del wrapper
- Resultado: el selector `#wrapper button` empieza a funcionar y el click cambia el texto.

### 4) Crear y añadir elementos nuevos a una lista (append)
- Construir un nuevo nodo (`li`) desde JavaScript y añadirlo al DOM al final de una lista.
- Flujo:
  - leer input (`input.value`)
  - crear nodo (`createElement('li')`)
  - asignar contenido (`innerText`)
  - insertarlo (`list.append(newItem)`)

---

## 🧠 Ideas clave
- Manipular DOM no es “cambiar texto”: es **crear/mover/eliminar nodos**.
- Si eliminas un nodo, desaparece de verdad (no hay vuelta atrás salvo recrearlo).
- Añadir un `id` o atributo es una forma válida de **adaptar el HTML** para que el JS funcione (cuando el ejercicio lo pide).
- “Wrappear” un elemento es reestructurar jerarquía: no es magia, es mover nodos.
- `append()` no copia elementos: los **mueve** si ya existen (por eso el botón termina dentro del wrapper).