# JsChallenger-Exercises

Repositorio de ejercicios de JavaScript basados en **JS Challenger**, organizado por módulos y documentado por bloques (READMEs).  
Objetivo: consolidar JavaScript con evidencia auditable (código + estructura + documentación), y usarlo como base para el salto a **TypeScript + React**.

## 🧭 Roadmap relacionado
Este repositorio forma parte de un roadmap mayor orientado a empleabilidad:

- **Frontend (principal):** HTML/CSS + JavaScript → TypeScript → React.
- **UI/maquetación:** retos de BigDevSoon + TailwindCSS (repo independiente).
- **Backend (más adelante):** Java → Spring Boot (fase posterior).

## 🎯 Objetivos
- Reforzar fundamentos y nivel intermedio de JavaScript con práctica consistente.
- Dominar patrones reales: arrays/objetos, scope, funciones modernas, asincronía y DOM.
- Mantener un estándar de trabajo: estructura clara, commits frecuentes y documentación por módulo.

## 🔗 Recurso principal
- JS Challenger: https://jschallenger.com/dashboard/

## ✅ Qué demuestra este repositorio
- Soltura real en JavaScript (básico → intermedio → DOM).
- Capacidad de resolver problemas de datos con métodos estándar (`map`, `filter`, `reduce`, `Object.*`, `Date`, `Set`).
- Comprensión de conceptos clave: scope, callbacks/promises y orden de ejecución.
- Enfoque profesional: organización, consistencia y READMEs que resumen lo trabajado.

## 🗂️ Estructura
Cada carpeta representa un módulo con su README general y READMEs por bloque:

- [`JS Basics`](./JS%20Basics/README.md)
- [`Intermediate JavaScript`](./Intermediate%20JavaScript/README.md)
- [`DOM Exercises`](./DOM%20Exercises/README.md)
- [`JavaScript Practice`](./JavaScript%20Practice/README.md)

> Nota: en **DOM Exercises** se conserva principalmente el JavaScript (sin HTML/CSS del playground), porque el foco aquí es la lógica y el uso del DOM.

## 📌 Convenciones
- Cada bloque tiene un `README.md` con:
  - Qué se trabajó
  - Ideas clave
- Regla interna: si está “hecho” pero no se entiende, no cuenta.

## ▶️ Cómo ejecutar
### Ejercicios de DOM
Este repositorio guarda el **JavaScript** del ejercicio. Para probarlo:
  - Ejecútalo dentro del playground de JS Challenger, o
  - Recrea un HTML mínimo localmente y enlaza el script

### Ejercicios de lógica (Basics / Intermediate / Practice)
Requisitos: Node.js (LTS)

```bash
node ruta/al/archivo.js