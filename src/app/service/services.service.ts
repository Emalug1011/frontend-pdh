import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private httpOptions = {};
  constructor(private httpClient: HttpClient) {
    if (sessionStorage.getItem("validate")) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "authorization": `${JSON.parse(sessionStorage.getItem('validate')).token_type} ${JSON.parse(sessionStorage.getItem('validate')).access_token}`
        })
      };
    }
  }

  /* Services from login and logout */
  /* Service from logout */
  /**
   * 
   * @param auth : json from auth
   * @function login
   * @returns true and false, if exist user
   */
  signIn(auth) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post(`${environment.host}auth/login`, auth, httpOptions);
  }
  /* service logout */
  /**
   * @function logout
   * @returns true and false, delete token 
   */
  logout() {
    return this.httpClient.get(`${environment.host}auth/logout`, this.httpOptions);
  }
  /* End services from login and logout */

  /* Maintance from users */
  getListUsers() {
    return this.httpClient.get(`${environment.host}users`, this.httpOptions)
  }

  getListDependency(){
    return this.httpClient.get(`${environment.host}dependencias`, this.httpOptions)
  }

  getListPosition(){
    return this.httpClient.get(`${environment.host}puestos`, this.httpOptions)
  }

  /* End maintance users */




}
