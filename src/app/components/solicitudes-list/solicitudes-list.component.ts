import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud.service';
import { ApiService, Usuario } from '../../services/api.service';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.css']
})
export class SolicitudesListComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  solicitudesPendientes: Solicitud[] = [];
  mostrarPendientes: boolean = false;
  usuariosApi: Usuario[] = [];

  constructor(
    private solicitudService: SolicitudService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.solicitudes = this.solicitudService.getSolicitudes();
    this.solicitudesPendientes = this.solicitudService.getPendientes();

    // Obtener los usuarios de la API externa
    this.apiService.obtenerUsuarios().subscribe(usuarios => {
      this.usuariosApi = usuarios;
    });
  }

  togglePendientes(): void {
    this.mostrarPendientes = !this.mostrarPendientes;
  }

  getNombreEstudiante(id: number): string {
    if (this.usuariosApi.length === 0) {
      return 'Cargando...'; // Mientras responde la API
    }
    const usuario = this.usuariosApi.find(u => u.id === id);
    return usuario ? usuario.name : 'Usuario Desconocido';
  }
}
