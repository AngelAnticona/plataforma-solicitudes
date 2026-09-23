import { Component, OnInit } from '@angular/core';
import { ApiService, Usuario } from '../../services/api.service';

@Component({
  selector: 'app-usuario-api',
  templateUrl: './usuario-api.component.html',
  styleUrls: ['./usuario-api.component.css']
})
export class UsuariosApiComponent implements OnInit {

  usuarios: Usuario[] = [];
  cargando: boolean = true;
  error: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
  this.cargando = true;
  this.error = '';

  this.apiService.obtenerUsuarios().subscribe({
    next: (datos) => {
      this.usuarios = datos;
      this.cargando = false;
    },
    error: () => {
      this.error = 'No se pudieron cargar los datos de la API';
      this.cargando = false;
    }
  });
}
}