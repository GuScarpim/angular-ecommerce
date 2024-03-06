import { Component, Input } from '@angular/core';

@Component({
  selector: 'rightNav-menu',
  templateUrl: './rightNav.component.html',
  styleUrls: ['../../../theme/theme.css', './rightNav.component.css']
})
export class RightComponent {
  @Input() open: boolean = false;
}
