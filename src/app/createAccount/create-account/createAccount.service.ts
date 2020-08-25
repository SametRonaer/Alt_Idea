import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserModel} from './user.model';

export class CreateUserService{

    @Injectable({
        providedIn: 'root'
      })

      demoUser : UserModel =

      {
          name: 'Samet Ronaer',
          email: 's.ronaer@gmail.com',
          password: '123456'
      };

    

    constructor(private http: HttpClient){}

    

   public addUser(){
        
      return  this.http.post('https://altidea-ef044.firebaseio.com/users.json' , this.demoUser).pipe();
    }
    
}