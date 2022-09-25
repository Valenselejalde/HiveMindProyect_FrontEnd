import { Component, OnInit } from '@angular/core';
import { CineticSillaService } from '../providers/cinetic.silla.service';

@Component({
  selector: 'app-sala',
  templateUrl: './silla.component.html',
  styleUrls: ['./silla.component.css']
})
export class SillaComponent implements OnInit {

  constructor(public cinetic: CineticSillaService) { }

  ngOnInit(): void {
    this.cinetic.listar()
  }
}
