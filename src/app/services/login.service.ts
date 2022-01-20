import { Injectable } from '@angular/core';
import { ILoginResult } from '../login/ilogin-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): Promise<ILoginResult> {
  
    let isLogin: ILoginResult = { loginSuccessful: true };
    
    let loginResult = new Promise<ILoginResult>((resolve, reject) => {
      if (username && password) {
        isLogin.loginSuccessful = true;
        resolve(isLogin);
      } else {
        isLogin.loginSuccessful = false;
        reject(isLogin);
      }
      
    });
    return loginResult;


  }

}
