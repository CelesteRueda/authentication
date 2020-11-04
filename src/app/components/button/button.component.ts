import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class AuthButtonComponent {
  constructor(public auth: AuthService) {}
}