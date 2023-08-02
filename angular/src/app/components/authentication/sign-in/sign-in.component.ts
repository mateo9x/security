import {Component} from '@angular/core';
import {SignInFormService} from './sign-in.form.service';
import {FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formService: SignInFormService
  ) {
    this.form = this.formService.getForm();
  }

  signIn() {
    this.form.markAllAsTouched();
    if (this.formService.isFormValid(this.form)) {
      const request = this.formService.createUserSignInRequest(this.form);
      this.authenticationService.signInDispatch(request);
    }
  }

  hasFormError(controlName: string, errorName: string) {
    return this.form.get(controlName)?.hasError(errorName);
  }
}
