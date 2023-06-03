import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/listar-notas/listar-notas.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { InfoProyectoComponent } from './components/info-proyecto/info-proyecto.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'', component: ListarNotasComponent},
  {path:'crear-nota', component:CrearNotaComponent},
  {path:'editar-nota/:id', component:CrearNotaComponent},
  {path:'info-proyecto', component: InfoProyectoComponent},
  {path:'login', component: LoginComponent},
  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
