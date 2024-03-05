import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/authService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
