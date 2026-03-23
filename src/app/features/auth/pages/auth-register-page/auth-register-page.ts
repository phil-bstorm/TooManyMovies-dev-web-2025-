import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from '@core/models/auth.interface';
import { AuthService } from '@core/services/auth.service';
import { strongPasswordValidator } from '@core/validators/strong-password.validator';
import { FormsErrorDisplay } from '@shared/components/forms-error-display/forms-error-display';

@Component({
  selector: 'app-auth-register-page',
  imports: [ReactiveFormsModule, FormsErrorDisplay],
  templateUrl: './auth-register-page.html',
  styleUrl: './auth-register-page.scss',
})
export class AuthRegisterPage {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);

  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    strongPasswordValidator(),
  ]);

  formRegister = this._fb.group({
    lastName: this.lastName,
    firstName: this.firstName,
    email: this.email,
    password: this.password,
  });

  onSubmitRegister() {
    console.log(this.formRegister);

    this.formRegister.markAllAsTouched();

    if (this.formRegister.valid) {
      console.log('Formulaire valide');
      console.log(this.formRegister.value);

      const data: RegisterData = {
        email: this.formRegister.value.email!,
        password: this.formRegister.value.password!,
        firstname: this.formRegister.value.firstName!,
        lastname: this.formRegister.value.lastName!,
      };
      this._authService.register(data).then(() => {
        this._router.navigate(['/', 'auth', 'login']);
      });
    }
  }
}
