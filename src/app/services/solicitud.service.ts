import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { solicitudesPrueba } from '../data/solicitudes.data';
import { obtenerSolicitudesPendientes, contarSolicitudesPorEstado } from '../utils/solicitud.utils';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private solicitudes: Solicitud[] = solicitudesPrueba;

  constructor() { }

  getSolicitudes(): Solicitud[] {
    return this.solicitudes;
  }

  getPendientes(): Solicitud[] {
    return obtenerSolicitudesPendientes(this.solicitudes);
  }

  agregarSolicitud(solicitud: Solicitud): void {
    // Asignamos un id secuencial básico
    solicitud.id = this.solicitudes.length > 0 
      ? Math.max(...this.solicitudes.map(s => s.id)) + 1 
      : 1;
    solicitud.fechaCreacion = new Date().toISOString().split('T')[0];
    solicitud.estado = 'Pendiente';
    this.solicitudes.push(solicitud);
  }
}
