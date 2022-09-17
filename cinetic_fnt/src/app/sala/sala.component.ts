import { Component, OnInit } from '@angular/core';
import { CineticService } from '../providers/cinetic.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private cinetic: CineticService) { }

  ngOnInit(): void {
    this.cinetic.listar()
  }
}
