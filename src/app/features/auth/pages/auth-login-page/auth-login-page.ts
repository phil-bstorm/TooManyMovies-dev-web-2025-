import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormsErrorDisplay } from '@shared/components/forms-error-display/forms-error-display';

@Component({
  selector: 'app-auth-login-page',
  imports: [RouterLink, ReactiveFormsModule, FormsErrorDisplay, NgClass],
  templateUrl: './auth-login-page.html',
  styleUrl: './auth-login-page.scss',
})
export class AuthLoginPage {
  private readonly _fb = inject(FormBuilder);

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  formLogin = this._fb.group({
    email: this.email,
    password: this.password,
  });

  onSubmit() {
    this.formLogin.markAllAsTouched();

    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
    }
  }
}
