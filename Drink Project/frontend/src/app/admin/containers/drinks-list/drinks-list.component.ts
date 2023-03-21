import { Component, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

drinks!: Drink[];


constructor(private drinkService: DrinkService) {

}

ngOnInit(): void {
    this.drinkService.read().subscribe((drink: Drink[]) => (this.drinks = drink));
}    
trackById(value: Drink) {
  return value.id;
}

}
