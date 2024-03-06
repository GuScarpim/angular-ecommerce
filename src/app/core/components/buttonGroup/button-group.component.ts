import { Component, Input } from '@angular/core';
import { FruitService } from '../../../shared/services/fruit.service';

@Component({
  selector: 'button-group-component',
  templateUrl: './button-group.component.html',
  styleUrls: ['../../theme/theme.css', './button-group.component.css']
})
export class ButtonGroupComponent {
  @Input() fruitId: number = 0;
  @Input() quantity: number = 0;

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    // Exemplo de como usar os observáveis fornecidos pelo FruitService
    this.fruitService.fruits$.subscribe(fruits => {
      console.log('Fruits:', fruits);
    });

    this.fruitService.filteredFruits$.subscribe(filteredFruits => {
      console.log('Filtered Fruits:', filteredFruits);
    });

    this.fruitService.totalQuantity$.subscribe(totalQuantity => {
      console.log('Total Quantity:', totalQuantity);
    });

    this.fruitService.totalValue$.subscribe(totalValue => {
      console.log('Total Value:', totalValue);
    });
  }

  removeFruitById(fruitId: number) {
    this.fruitService.removeFruitById(fruitId);
  }

  addFruitById(fruitId: number) {
    this.fruitService.addFruitById(fruitId);
  }

}
