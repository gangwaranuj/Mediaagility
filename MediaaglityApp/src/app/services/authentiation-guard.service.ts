import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { sequenceEqual } from 'rxjs/operators';
import { Constants } from '../model/constants';
import { Utils } from '../utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class AuthentiationGuardService implements CanActivate {

  constructor(
    private router: Router) { }

  canActivate() {
    if (Utils.isAuthenticated()) {
      return true;
    }
    console.log('Not authentcated, redirecting to login ..')
    this.router.navigate(['/login']);
    return false;
  }
}
