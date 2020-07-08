import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class VipGuard implements CanActivate {

  constructor(private userStoreService: UserStoreService, private router: Router){}

  canActivate(): Observable<boolean> {
    return this.userStoreService.userEmail$.pipe(
      map(userEmail => {
        if(userEmail.length === 0){
        this.router.navigate(['/weather'])
        return false;
      }
      return true;
    })
    )
    }
    
}
  

