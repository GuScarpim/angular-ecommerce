import { Component, Input } from '@angular/core';
import { numberFormat } from '../../../shared/utils/format-number';
import { Subscription } from 'rxjs';
import { FruitService, IFruit } from '../../../shared/services/fruit.service';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() openModal: boolean = false;
  @Input() closeModal: () => void = () => {};
  @Input() title: string = '';

  totalValue: number = 0;
  totalValueSubscription: Subscription = new Subscription();
  totalQuantity: number = 0;
  totalQuantitySubscription: Subscription = new Subscription();
  fruits: IFruit[] = [];
  fruitSubscription: Subscription = new Subscription();

  constructor(
    private fruitService: FruitService
  ) { }

  ngOnInit() {
    this.totalValueSubscription = this.fruitService.totalValue$.subscribe(totalValue => {
      this.totalValue = totalValue;
    });
    this.totalQuantitySubscription = this.fruitService.totalQuantity$.subscribe(totalQuantity => {
      this.totalQuantity = totalQuantity;
    });
    this.fruitSubscription = this.fruitService.fruits$.subscribe(fruits => {
      this.fruits = fruits;
    });
  }

  ngOnDestroy() {
    this.totalValueSubscription.unsubscribe();
    this.totalQuantitySubscription.unsubscribe();
    this.fruitSubscription.unsubscribe();
  }

  numberFormated(value: number) {
    return numberFormat(String(value));
  }

  generatePDF() {
    return
  }
}
