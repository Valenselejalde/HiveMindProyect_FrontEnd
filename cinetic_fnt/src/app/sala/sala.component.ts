import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  salas:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get('sala').subscribe(data => {
      if (data != undefined) {
        this.salas = data
      }
      
      console.log(data)
    })
  }

}
