import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/authentication/auth.service';
//import { LoginInputModel } from '../../../core/models/input-models/login.input.model';
import { FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  AbstractControl } from '@angular/forms';

@Component({
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  public loginForm : FormGroup;

  constructor(private authService : AuthService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [ 
        Validators.required
        //this.checkEmail.bind(this)
      ]],
      password: ['', [Validators.required]]
    })
  }

  login(e) {
    console.log(e);
    //this.authService.tryNavigate();
  }
}