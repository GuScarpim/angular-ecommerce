import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FruitService } from 'src/app/shared/services/fruit.service';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../theme/theme.css', './navbar.component.css']
})
export class NavbarComponent {
  openModal: boolean = false;
  searchValue: string = '';
  totalQuantity: number = 0;
  totalQuantitySubscription: Subscription = new Subscription();

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

  ngOnInit() {
    this.totalQuantitySubscription = this.fruitService.totalQuantity$.subscribe(totalQuantity => {
      this.totalQuantity = totalQuantity;
    });
  }

  ngOnDestroy() {
    // Limpar a assinatura quando o componente for destruído
    this.totalQuantitySubscription.unsubscribe();
  }
}
