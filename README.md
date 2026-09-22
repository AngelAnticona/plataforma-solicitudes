# Plataforma de Gestión de Solicitudes Académicas

## 1. Integrantes

| Integrante | Rol | Participación |
|---|---|---|
| Angel | Actividad 1 - TypeScript y estructura modular | Desarrollo de modelos, tipos, funciones utilitarias y organización de la estructura |
| [Integrante 2] | Actividad 2 - Angular | [Completar] |
| [Integrante 3] | Actividad 3 - Formularios y Router | [Completar] |
| [Integrante 4] | Actividad 4 - API REST | [Completar] |

> Completar los nombres completos y la participación de cada integrante antes de la entrega.

---

## 2. Descripción del proyecto

La **Plataforma de Gestión de Solicitudes Académicas** es una aplicación web desarrollada con Angular y TypeScript para gestionar solicitudes académicas realizadas por estudiantes.

El proyecto busca establecer una base modular y tipada que permita organizar las entidades, tipos de datos, funciones y componentes necesarios para el desarrollo progresivo de la plataforma.

---

## 3. Objetivo

Desarrollar una plataforma web para la gestión de solicitudes académicas, aplicando TypeScript, Angular y una estructura modular que permita incorporar progresivamente funcionalidades de gestión, validación y consumo de datos.

---

## 4. Desarrollo

### 4.1 Actividad 1 - Base tipada y modular

En esta actividad se implementó la base tipada y modular de la aplicación utilizando TypeScript.

Se definieron interfaces para representar las principales entidades del sistema y tipos específicos para controlar los valores permitidos en las solicitudes.

#### Estructura implementada

```text
src/app/
├── data/
│   └── solicitudes.data.ts
├── models/
│   ├── estudiante.ts
│   └── solicitud.ts
├── types/
│   └── solicitud.types.ts
└── utils/
    └── solicitud.utils.ts

    