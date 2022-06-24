import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken:any;
  user:any;

  constructor(private http:HttpClient) { }

  authUser(user: any){
    // let headers=new HttpHeaders();
    // headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user)
   
  }

  storeUserData(token: string,user: any){
     localStorage.setItem('id_token',token);
     localStorage.setItem('user',JSON.stringify(user));
     this.authToken=token;
     this.user=user
  }
}
