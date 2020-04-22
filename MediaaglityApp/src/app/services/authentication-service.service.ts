import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { map } from 'node_modules/rxjs/operators';
import { Constants } from '../model/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }
  
  
  /**
   * Validate the user cridential 
   * @param userForm 
   */
  validateUser(userForm: User) {
    const url = Constants.BASE_URL + Constants.LOGIN_URL;
    return this.http.post<any>(url, userForm, { responseType: 'json' })
      .pipe(map(data => data))
  }

  /**
   * Get all user -list
   */
  getUserList() {
    const url = Constants.BASE_URL + Constants.GET_USRE_LIST;
    return this.http.get<any>(url, { responseType: 'json' })
      .pipe(map(data => data))
  }

  
}
