import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalaComponent } from './sala/sala.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SillaComponent } from './silla/silla.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'sala', component: SalaComponent},
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'silla', component: SillaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
