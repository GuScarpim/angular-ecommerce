import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/authService.service';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['../../theme/theme.css', './user.component.css']
})
export class UserComponent {
  constructor(private authService: AuthService) { }

  name = this.authService.getName().value;
  isMenuOpen = false;

  handleToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
