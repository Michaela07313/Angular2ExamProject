import { Component, OnInit } from '@angular/core';
import { FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  AbstractControl } from '@angular/forms';

import { PasswordValidation } from './register-validations';
import { AuthService } from '../../../core/services/authentication/auth.service';
const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

@Component({
  templateUrl: './register.form.component.html'
})
export class RegisterFormComponent implements OnInit {
  public registerForm : FormGroup;
  public types : string[];

  constructor(private authService : AuthService, private fb : FormBuilder) {
    this.types = [ 'Employee', 'Team Leader'];
   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [ 
        Validators.required, 
        Validators.pattern(emailRegex), 
        //this.checkEmail.bind(this)
      ]],
      firstName: ['', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25)
      ]],
      lastName: ['', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25)
      ]],
      selectType: this.types[0],
      auth: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.minLength(3), 
          Validators.maxLength(25)
        ]],
        repeatedPassword: ['', [Validators.required]]
      },
      {
        validator: PasswordValidation.MatchPasswords
      })
    })
  }

  register(e) {
    console.log(e);
    //this.authService.tryNavigate();
  }
}