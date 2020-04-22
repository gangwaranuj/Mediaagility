import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { sequenceEqual } from 'rxjs/operators';
import { Constants } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class Utils  {

 public static isAuthenticated(){
   return !(sessionStorage.getItem(Constants.AUTHENTICATE)== undefined || sessionStorage.getItem(Constants.AUTHENTICATE) == null || sessionStorage.getItem(Constants.AUTHENTICATE)=='false')
 }
  
}
