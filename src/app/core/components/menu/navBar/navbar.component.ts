import { Component } from '@angular/core';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../theme/theme.css', './navbar.component.css']
})
export class NavbarComponent {
  openModal: boolean = false;

  setOpenModal() {
    this.openModal = !this.openModal;
  }
}
