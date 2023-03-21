import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-card',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent {
  @Input() item!: Drink;
}
