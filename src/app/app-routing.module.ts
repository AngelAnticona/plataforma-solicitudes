import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesListComponent } from './components/solicitudes-list/solicitudes-list.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { UsuariosApiComponent } from './components/usuario-api/usuario-api.component';

const routes: Routes = [
  { path: 'solicitudes', component: SolicitudesListComponent },
  { path: 'nueva-solicitud', component: SolicitudFormComponent },
  { path: 'usuarios', component: UsuariosApiComponent },
  { path: '', redirectTo: '/solicitudes', pathMatch: 'full' },
  { path: '**', redirectTo: '/solicitudes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
