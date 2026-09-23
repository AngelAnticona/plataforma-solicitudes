# Plataforma de Gestión de Solicitudes Académicas


---

## LINK EXPOSICIÓN: https://youtu.be/swTMiqJIbEE
---

## 1. Integrantes y responsabilidades
| Integrante | Rol | Responsabilidad | Evidencia |
|------------|-----|----------------|-----------|
| **Angel Thomas Ali Anticona Gonza** | Actividad 1 & 2 | TypeScript + README (modelos, tipos, datos de prueba, documentación) y Arquitectura de componentes Angular (componentes, módulos, data‑binding, directivas, servicios, inyección de dependencias) | `src/app/models`, `src/app/data`, `src/app/components/solicitudes-list`, `src/app/services/solicitud.service.ts` |
| **Fabián Marcelo Dávila Herrera** | Actividad 3 | Formularios reactivos, validaciones, mensajes de error y navegación con RouterModule | `src/app/components/solicitud-form` |
| **Isaac Arturo Claudio Saldaña** | Actividad 4 | Servicio Angular, HttpClient, consumo de API REST | `src/app/components/usuario-api`, `src/app/services/api.service.ts` |

---

## 2. Descripción del proyecto
La *Plataforma de Gestión de Solicitudes Académicas* es una aplicación web basada en **Angular 16** y **TypeScript** que permite a los estudiantes registrar, consultar y visualizar solicitudes académicas (certificados, consultas, reclamos, etc.).

- Cada solicitud está tipada con interfaces y **enums** que garantizan la consistencia de los datos.
- El módulo **SolicitudService** gestiona el ciclo de vida de las solicitudes mediante **inyección de dependencias**.
- El **formulario reactivo** asegura la captura de datos con validaciones completas.
- La navegación se maneja con **RouterModule**, proporcionando rutas para el listado, el formulario y el módulo API.
- Los nombres de los alumnos se obtienen dinámicamente desde la API externa **JSONPlaceholder**, asegurando que el ID de la solicitud coincida con el nombre real del usuario.

---

## 3. Objetivo del trabajo
Desarrollar una aplicación modular y tipada que demuestre el dominio de:
- **TypeScript** (interfaces, tipos, ES6+, `let/const`, `async/await`).
- **Angular 16** (componentes, módulos, data‑binding, directivas, servicios, DI).
- **Formularios reactivos** con validaciones y manejo de errores.
- **Router** para la navegación entre vistas.
- **Consumo de API REST** mediante `HttpClient`.
- **Documentación y evidencia** (README, capturas de pantalla y video).

---

## 4. Desarrollo (cumplimiento por actividad)
### 4.1 Actividad 1 – Base tipada y modular 
- Interfaces `Solicitud` y `Estudiante` definidas en `src/app/models/`.
- Enums `EstadoSolicitud` y `TipoSolicitud` en `src/app/types/solicitud.types.ts`.
- Data de prueba en `src/app/data/solicitudes.data.ts`.
- Utilidades (`obtenerSolicitudesPendientes`, `contarSolicitudesPorEstado`) en `src/app/utils/solicitud.utils.ts`.
- Compilación y ejecución sin errores (`ng build`).

### 4.2 Actividad 2 – Arquitectura de componentes Angular 
- Módulo raíz `AppModule` con declaración de componentes.
- Componente `SolicitudesListComponent` que muestra el listado y las pendientes.
- Servicio `SolicitudService` inyectado en el componente.
- Data‑binding (`{{ }}`, `[ngClass]`), directivas estructurales (`*ngFor`, `*ngIf`).
- Navegación a la vista de API y al formulario mediante `routerLink`.

### 4.3 Actividad 3 – Formularios reactivos, validaciones y router 
- Generación del componente `SolicitudFormComponent`.
- Formulario basado en `FormGroup` y `FormBuilder` con validaciones (`required`, `minLength`, `maxLength`, `min`).
- Mensajes de error visibles y estilos (`.is-invalid`).
- Envío del formulario: se llama a `SolicitudService.agregarSolicitud` y se redirige a `/solicitudes`.
- Rutas definidas en `app-routing.module.ts` (`/solicitudes`, `/nueva-solicitud`, `/usuarios`).

### 4.4 Actividad 4 – Consumo de API REST 
- `ApiService` con `HttpClient` que consume `https://jsonplaceholder.typicode.com/users`.
- Componente `UsuariosApiComponent` muestra la lista de usuarios.
- `SolicitudesListComponent` utiliza `ApiService` para obtener el nombre del alumno a partir del `estudianteId` (p. ej., ID 1 → *Leanne Graham*).
- Video de demostración que muestra la aplicación en ejecución.

---

## 5. Instrucciones de instalación y ejecución
```bash
# Clonar el repositorio
git clone https://github.com/AngelAnticona/plataforma-solicitudes.git
cd plataforma-solicitudes

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npx ng serve
# Abrir http://localhost:4200 en el navegador
```

### 5.1 Ejecutar pruebas unitarias
```bash
npx ng test --watch=false
# Todas las pruebas deben finalizar con 8 SUCCESS.
```

---

## 6. Evidencias
Todas las evidencias se encuentran dentro del folder **`evidencias`** del proyecto.

---

## 7. Conclusiones
- **Angel Thomas Ali Anticona Gonza:** *"Al estructurar la base tipada y diseñar la arquitectura de componentes, comprendí la importancia de los tipos estáticos y de una modularidad clara en Angular. Aprendí a usar `@Injectable` para compartir lógica y a organizar el proyecto de forma que cada pieza tenga una única responsabilidad, lo que facilitó la integración de los demás módulos."*
- **Fabián Marcelo Dávila Herrera:** *"Desarrollar el formulario reactivo me permitió profundizar en la API de `FormBuilder` y en la definición de validaciones personalizadas. Además, integrar el router me enseñó a manejar la navegación de forma declarativa, lo que mejora la experiencia del usuario al movernos entre vistas sin recargar la página."*
- **Isaac Arturo Claudio Saldaña:** *"Trabajar con `HttpClient` para consumir una API externa y mapear los datos a nuestro modelo me mostró cómo Angular abstrae las peticiones HTTP y cómo manejar flujos asíncronos con RxJS. La creación del video también reforzó la importancia de documentar y presentar nuestro trabajo de forma clara y profesional."*

---
