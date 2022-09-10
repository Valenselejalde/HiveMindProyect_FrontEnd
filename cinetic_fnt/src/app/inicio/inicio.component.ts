import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    
  }
}
