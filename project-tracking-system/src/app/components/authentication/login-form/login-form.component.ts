import { Component } from '@angular/core';
import { LoginInputModel } from '../../../core/models/input-models/login.input.model';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  public model : LoginInputModel;
  public loginFail : boolean;
  public errorMessage :string;

  constructor(
    private authService : AuthService,
    private router : Router
  ) {
    this.model = new LoginInputModel("", "");
  }

  login () : void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          console.log(data)
          if(data.success == true) {
            this.loginFail = false;
            this.successfulLogin(data);
          } else {
            this.errorMessage = data.errorMessage;
            this.loginFail = true;
          }
        },
        err => {
          this.loginFail = true;
        }
      )
  }

  successfulLogin(data) : void {
    this.authService.authtoken = data['token'];
    localStorage.setItem('authtoken', data['token']);
    localStorage.setItem('name', data['user']['firstName']);
    this.authService.tryNavigate();
    //this.router.navigate(['/home']);
  }
}