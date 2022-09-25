import { Component, OnInit } from '@angular/core';
import { CineticPeliculaService } from '../providers/cinetic.pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(public cinetic: CineticPeliculaService) { }

  ngOnInit(): void {
    this.cinetic.listar()
  }
}
