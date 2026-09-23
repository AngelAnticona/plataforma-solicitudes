import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosApiComponent } from './components/usuario-api/usuario-api.component';
import { SolicitudesListComponent } from './components/solicitudes-list/solicitudes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosApiComponent,
    SolicitudesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
