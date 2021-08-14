import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isProcessing: boolean;
  public errorMessage: string | null;

  constructor(
    private readonly authService: AuthService,
  ) { }

  public async onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    try {
      this.isProcessing = true;
      const { email, password } = form.value;
      await this.authService.login(email, password);
    } catch (err) {
      this.errorMessage = err.message;
    } finally {
      this.isProcessing = false;
    }
  }
}
