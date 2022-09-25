import { Component, OnInit } from '@angular/core';
import { CineticSalaService } from '../providers/cinetic.sala.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(public cinetic: CineticSalaService) { }

  ngOnInit(): void {
    this.cinetic.listar()
  }
}
