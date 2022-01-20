import { Injectable } from '@angular/core';
import { ILoginResult } from '../login/ilogin-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): Promise<ILoginResult> {
  
    let x: ILoginResult = { loginSuccessful: true };

   

    let loginResult = new Promise<ILoginResult>((resolve, reject) => {
      if (username && password) {
        x.loginSuccessful = true;
        resolve(x);
      } else {
        x.loginSuccessful = false;
        reject(x);
      }
      
    });
    return loginResult;


  }

}
