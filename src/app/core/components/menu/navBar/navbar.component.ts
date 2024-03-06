import { Component } from '@angular/core';
import { FruitService } from 'src/app/shared/services/fruit.service';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../theme/theme.css', './navbar.component.css']
})
export class NavbarComponent {
  openModal: boolean = false;
  searchValue: string = '';

  constructor(
    private fruitService: FruitService
  ) { }

  handleChange = (value: string) => {
    const searchTerm = value.toLowerCase();
    this.fruitService.setSearchTerm(searchTerm);
  }

  setOpenModal() {
    this.openModal = !this.openModal;
  }
}
