import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalaComponent } from './sala/sala.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'sala', component: SalaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
