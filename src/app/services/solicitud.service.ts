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
}
