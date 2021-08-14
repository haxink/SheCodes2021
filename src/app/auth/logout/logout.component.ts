import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sc-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  public errorMessage: string | null = null;

  constructor(
    private readonly authService: AuthService,
  ) { }

  public async ngOnInit() {
    try {
      await this.authService.logOut();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
}
