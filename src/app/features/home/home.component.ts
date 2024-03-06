import { Component, OnInit } from '@angular/core';
import { fruits as mockFruits } from '../../shared/utils/fruits-mock';
import { FruitService, IFruit } from '../../shared/services/fruit.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private fruitService: FruitService,
    private _toastService: ToastService
  ) { }

  isLoading: boolean = false;
  filteredFruits: IFruit[] = [];
  fruits: IFruit[] = []
  filteredFruitsSubscription: Subscription = new Subscription();
  fruitsSubscription: Subscription = new Subscription();

  loadFruits = async () => {
    try {
      this.isLoading = true;
      await new Promise(resolve => {
        if (this.fruits.length === 0) {
          this.fruitService.setFruits(mockFruits);
        }
        setTimeout(resolve, 1000);
      });
    } catch (error) {
      this._toastService.error('Erro ao carregar frutos.');
    } finally {
      this.isLoading = false;
    }
  }

  ngOnInit() {
    this.filteredFruitsSubscription = this.fruitService.filteredFruits$.subscribe(filteredFruits => {
      this.filteredFruits = filteredFruits;
    });
    this.fruitsSubscription = this.fruitService.fruits$.subscribe(fruits => {
      this.fruits = fruits;
    });
    this.loadFruits();
  }

  ngOnDestroy() {
    // Limpar a assinatura quando o componente for destruído
    this.filteredFruitsSubscription.unsubscribe();
    this.fruitsSubscription.unsubscribe();
  }
}
