import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario:any;
  base_url:string = 'http://127.0.0.1:8000'
  
  headers_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers: this.headers_login}

  headers_token:any
  options_token:any

  constructor(private http:HttpClient) { }

  login (data:any) {
    let url = `${this.base_url + '/token'}`;
    let credenciales = JSON.stringify(data)

    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()))
  }

  crear_header_token (token:string) {
    this.headers_token = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token)
    this.options_token = {headers: this.headers_token}
  }

  get(endoint:string): Observable<any []> {
    let url = `${this.base_url + '/' + endoint + '/'}`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.error)
      return of(result as T);
    };
  }
}
