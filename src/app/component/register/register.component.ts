/**
 * Created by lenovo on 12/31/2016.
 */
import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../model/AppUser";
import {RegisterService} from "../../service/Register.service";

@Component({
    selector: 'register-app',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

  newUser: AppUser = new AppUser();
  registered: boolean = false;

    constructor(private registerService: RegisterService) { }

    onSubmit(){
      this.registerService.sendUser(this.newUser).subscribe(
        data => {
          this.registered = true;
          this.newUser = new AppUser();
        },
        error => console.log(error)
      );
    }
}
