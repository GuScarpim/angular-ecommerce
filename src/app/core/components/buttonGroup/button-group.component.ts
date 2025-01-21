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

  removeFruitById(fruitId: number) {
    this.fruitService.removeFruitById(fruitId);
  }

  addFruitById(fruitId: number) {
    this.fruitService.addFruitById(fruitId);
  }

}
