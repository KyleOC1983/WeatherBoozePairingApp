import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  

private readonly _userEmail = new BehaviorSubject<string>('');

readonly userEmail$ = this._userEmail.asObservable();

private get userEmail(){
  return this._userEmail.getValue();
}

private set userEmail(val){
  this._userEmail.next(val);
}

 addUserEmail(email){
    this.userEmail = email;
  }

  clearUserEmail(email){
    this.userEmail = "";
  }

  constructor() { }
}
