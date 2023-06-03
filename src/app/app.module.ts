import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { ListarNotasComponent } from './components/listar-notas/listar-notas.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InfoProyectoComponent } from './components/info-proyecto/info-proyecto.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearNotaComponent,
    ListarNotasComponent,
    InfoProyectoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
