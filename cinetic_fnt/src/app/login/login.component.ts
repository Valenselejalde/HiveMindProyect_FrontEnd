import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_usuario = this.frmB.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  }) 

  constructor(private api:ApiService, private frmB:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.api.login(this.form_usuario.value).subscribe(data => {
        if (data != undefined) {
          this.api.crear_header_token(data.token)
          this.router.navigate(['/sala'])
        }
        else {
          this.router.navigate(['/login'])
        }
    })
  }
}
