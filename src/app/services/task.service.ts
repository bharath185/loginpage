import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface login{
  username:any;
  password:any;
}

interface username{
  username:any;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private loginUrl = 'http://localhost:3000/login';
  private usernameUrl = 'http://localhost:3000/getUser';
  constructor(private http: HttpClient) {

  }
  getlogin(login: login){
    return this.http.post<login>(this.loginUrl, login);
  }

    getuser(username: any){
    return this.http.get<username>(this.usernameUrl, username);
  }
}
