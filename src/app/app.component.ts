import { Component } from '@angular/core';
import { Solicitud } from './models/solicitud';
import { solicitudesPrueba } from './data/solicitudes.data';
import { obtenerSolicitudesPendientes } from './utils/solicitud.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  solicitudes: Solicitud[] = solicitudesPrueba;

  solicitudesPendientes: Solicitud[] =
    obtenerSolicitudesPendientes(this.solicitudes);
}