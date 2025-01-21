import { Component, Input } from '@angular/core';
import { numberFormat } from '../../../shared/utils/format-number';

@Component({
  selector: 'fruits-items-component',
  templateUrl: './fruits-items.component.html',
  styleUrls: ['../../theme/theme.css', './fruits-items.component.css']
})
export class FruitsComponent {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() value: number = 0;

  numberFormated(value: number) {
    return numberFormat(String(value));
  }
}
