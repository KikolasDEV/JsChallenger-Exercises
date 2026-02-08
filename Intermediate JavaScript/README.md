# Intermediate JavaScript

Bloque de JavaScript intermedio resuelto en formato de ejercicios (JS Challenger).  
Objetivo: pasar de “saber la sintaxis” a **escribir JavaScript moderno** con métodos de arrays, objetos dinámicos, scope real y asincronía (callbacks/promises/async-await).

## 🎯 Objetivos del bloque
- Dominar patrones habituales de código en JavaScript moderno (ES6+).
- Reemplazar bucles manuales cuando no aporten valor por métodos declarativos (find/map/filter/reduce...).
- Entender y controlar el **scope** para evitar bugs por shadowing o acceso indebido.
- Entender y controlar la **asincronía** (orden de ejecución, callbacks, promises y async/await).
- Documentar el progreso con evidencia auditable (código + notas + commits).

## 🔗 Recurso
- JS Challenger: https://jschallenger.com/dashboard/

## ✅ Estándar de calidad
Cada ejercicio debe cumplir:
- Solución clara y legible (sin “magia” innecesaria).
- Uso correcto del enfoque del ejercicio (si piden `map`, se usa `map`; si piden `find`, se usa `find`).
- README por bloque con resumen técnico (qué se trabajó y puntos clave).
- Si aplica: anotación breve de trampas reales (scope / async / mutación).

> Regla interna: si está “hecho” pero no se entiende, no cuenta.

## 🗂️ Estructura
Cada subcarpeta representa un bloque temático de Intermediate JavaScript.

- [Array Methods](./01_ArrayMethods/README.md)
- [Objects (Dynamic Access)](./02_Objects_2/README.md)
- [Scope](./03_Scope/README.md)
- [Functions (Rest & Arrow)](./04_Functions_2/README.md)
- [Asynchronous JS](./05_AsynchronousJS/README.md)

## ▶️ Cómo ejecutar
Requisitos: Node.js (LTS).

Ejecuta cualquier archivo con:
```bash
node ruta/al/archivo.js