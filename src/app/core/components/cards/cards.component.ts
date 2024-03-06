import { Component, Input } from '@angular/core';

@Component({
  selector: 'cards-component',
  templateUrl: './cards.component.html',
  styleUrls: ['../../theme/theme.css', './cards.component.css']
})
export class CardsComponent {
  @Input() fruitId: number = 0;
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() description: string = '';
  @Input() quantity: number = 0;
}
