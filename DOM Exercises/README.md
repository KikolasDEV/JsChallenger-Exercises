# DOM Exercises

Bloque práctico de JavaScript enfocado en **DOM y eventos** (JS Challenger).  
Objetivo: pasar de “resolver ejercicios de lenguaje” a **interactuar con una interfaz real**: seleccionar elementos, reaccionar a eventos y manipular el árbol DOM de forma segura.

## 🎯 Objetivos del bloque
- Dominar selección de elementos (`getElementById`, `querySelector`, `querySelectorAll`) y selectores CSS aplicados al DOM.
- Controlar eventos del usuario (`click`, `mouseover`, `mouseout`, `mousemove`, `input`, `drag/drop`) con `addEventListener`.
- Manipular el DOM de forma práctica: crear, insertar, mover y eliminar nodos.
- Trabajar con estado mínimo en UI (valores, texto, estilos, posiciones) y reflejarlo en pantalla.
- Documentar el progreso con evidencia auditable (código + notas + commits).

## 🔗 Recurso
- JS Challenger: https://jschallenger.com/dashboard/

## ✅ Estándar de calidad
Cada ejercicio debe cumplir:
- Selección correcta de elementos (sin “selecciono cualquier cosa y funciona”).
- Listener correcto según el evento (si es `input`, no usar `change`; si es lista, valorar delegación).
- Manipulación explícita del DOM (nodos/atributos/estilos) cuando aplique.
- README por bloque con resumen técnico claro (qué se trabajó y puntos clave).

> Regla interna: si está “hecho” pero no se entiende o no es reproducible, no cuenta.

## 🗂️ Estructura
Cada subcarpeta representa un bloque temático de DOM Exercises:

- [DOM Selector Methods](./01_DOM_SelectorMethods/README.md)
- [Events & User Interactions](./02_EventsUser_Interactions/README.md)
- [DOM Manipulation](./03_DOM_Manipulation/README.md)
- [DOM Fundamentals](./04_DOM_Fundamentals/README.md)
- [DOM Recursive Functions](./05_DOM_RecursiveFunctions/README.md)

## ▶️ Cómo ejecutar
Este repositorio **solo incluye el JavaScript** de cada ejercicio (sin el HTML/CSS del playground).  
Por tanto:

- ✅ Se puede leer, revisar y auditar el código y los conceptos trabajados.
- ⚠️ No es ejecutable “tal cual” sin el HTML correspondiente del reto en JS Challenger.

Si quieres **probarlos**, abre el ejercicio en JS Challenger y pega el snippet en su editor (o recrea el HTML mínimo localmente).

> Decisión intencional: aquí se guarda lo importante (la lógica y el enfoque), no el boilerplate visual.