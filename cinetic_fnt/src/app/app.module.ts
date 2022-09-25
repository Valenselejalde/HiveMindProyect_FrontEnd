import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './providers/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SalaComponent } from './sala/sala.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CineticSalaService } from './providers/cinetic.sala.service';
import { TabMenuModule } from 'primeng/tabmenu';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SillaComponent } from './silla/silla.component';
import { CineticPeliculaService } from './providers/cinetic.pelicula.service';
import { CineticSillaService } from './providers/cinetic.silla.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SalaComponent,
    PeliculaComponent,
    SillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DropdownModule,
    TabMenuModule
  ],
  providers: [ApiService, CineticSalaService, CineticPeliculaService, CineticSillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
