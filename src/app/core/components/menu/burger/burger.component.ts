import { Component } from '@angular/core';

@Component({
  selector: 'burger-menu',
  templateUrl: './burger.component.html',
  styleUrls: ['../../../theme/theme.css', './burger.component.css']
})
export class BurgerComponent {
  open: boolean = false;

  setOpen() {
    console.log('teste', this.open)
    this.open = !this.open;
  }
 }
