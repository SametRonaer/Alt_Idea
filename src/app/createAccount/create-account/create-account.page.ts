import { Component, OnInit, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CreateUserService } from './createAccount.service';
import { UserModel } from './user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})


export class CreateAccountPage implements OnInit {

  @Injectable({
    providedIn: 'root'
  })

  userService : CreateUserService;

  getData(name:string , mail:string , password:string , confirmPassword:string){
    
    console.log(this.comparePassword(password , confirmPassword));
    //this.userService.addUser();
    this.addUser();
  }


  

  comparePassword(password , confirmPassword){
    if(password == confirmPassword){
      console.log("Passwords are same");
      return true;
    }else{
      console.log("Passwords are not same!");
      this.presentToast();
      return false;
    }
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Passwords are not same!',
      duration: 2000
    });
    toast.present();
  }


  constructor(public toastController: ToastController , private http: HttpClient) { }







 

  demoUser : UserModel =

  {
      name: 'Samet Ronaer',
      email: 's.ronaer@gmail.com',
      password: '123456'
  };






public addUser(){
    
  return  this.http.post('https://altidea-ef044.firebaseio.com/users.json' , this.demoUser).subscribe;
}





  ngOnInit() {
  }

}
