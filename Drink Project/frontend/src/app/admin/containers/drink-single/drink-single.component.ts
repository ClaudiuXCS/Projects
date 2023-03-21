import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-single',
  templateUrl: './drink-single.component.html',
  styleUrls: ['./drink-single.component.scss']
})
export class DrinkSingleComponent implements OnInit {

  drink!: Drink;
  isEdit!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drinkService: DrinkService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');


    this.drinkService.readOne(id)
    .subscribe((drink: Drink) => this.drink = drink);

    this.isEdit = this.route.snapshot.data['isEdit'];

  }

  onCreate(drink: Drink) {
    this.drinkService.create(drink).subscribe(() => { 
      this.router.navigate(['admin']);
      console.log('Created successfully!') });
  }

  
  onUpdate(drink: Drink) {
    this.drinkService.update(drink).subscribe({next: () => {
      this.router.navigate(['admin']);
      console.log('Updated successfully!'); },
    error: (err) => console.log('OnUpdate error: ', err),});
  }

  onDelete(drink: Drink) {
    this.drinkService.delete(drink).subscribe(() => {
      this.router.navigate(['admin']);
      console.log('Deleted successfully!'); } );;;
  }
}

