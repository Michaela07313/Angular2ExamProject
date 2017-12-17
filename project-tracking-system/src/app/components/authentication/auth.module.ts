import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { authComponents } from './index';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {  }