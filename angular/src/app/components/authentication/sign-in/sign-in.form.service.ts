import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationRequest} from '../../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SignInFormService {

  getForm() {
    return new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      rememberMe: new FormControl(false, [])
    });
  }

  createUserSignInRequest(form: FormGroup): AuthenticationRequest {
    return new AuthenticationRequest(
      this.getLogin(form).value,
      this.getPassword(form).value,
      this.getRememberMe(form).value
    );
  }

  public isFormValid(form: FormGroup): boolean {
    return form.valid;
  }

  getLogin(form: FormGroup) {
    return form.get('login') as AbstractControl;
  }

  getPassword(form: FormGroup) {
    return form.get('password') as AbstractControl;
  }

  getRememberMe(form: FormGroup) {
    return form.get('rememberMe') as AbstractControl;
  }
}
