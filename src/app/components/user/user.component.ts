import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'user-profile',
  templateUrl: './user.component.html'
})
export class UserProfileComponent {
    constructor(public auth: AuthService) {}  
}