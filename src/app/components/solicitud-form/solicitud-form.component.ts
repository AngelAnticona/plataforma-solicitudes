import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent implements OnInit {
  solicitudForm!: FormGroup;
  enviado = false;

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.solicitudForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      tipo: ['', Validators.required],
      estudianteId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() { return this.solicitudForm.controls; }

  onSubmit(): void {
    this.enviado = true;

    if (this.solicitudForm.invalid) {
      return;
    }

    this.solicitudService.agregarSolicitud(this.solicitudForm.value);
    this.router.navigate(['/solicitudes']);
  }
}
