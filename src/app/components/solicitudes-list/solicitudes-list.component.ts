import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud.service';
import { estudiantesPrueba } from '../../data/estudiantes.data';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.css']
})
export class SolicitudesListComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  solicitudesPendientes: Solicitud[] = [];
  mostrarPendientes: boolean = false;
  estudiantes: Estudiante[] = estudiantesPrueba;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.solicitudes = this.solicitudService.getSolicitudes();
    this.solicitudesPendientes = this.solicitudService.getPendientes();
  }

  togglePendientes(): void {
    this.mostrarPendientes = !this.mostrarPendientes;
  }

  getNombreEstudiante(id: number): string {
    const estudiante = this.estudiantes.find(e => e.id === id);
    return estudiante ? `${estudiante.nombre} ${estudiante.apellido}` : 'Estudiante Desconocido';
  }
}
