import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss']
})
export class DrinkFormComponent {

  @Input() item!: Drink;
  @Input() isEdit!: boolean;

  @Output() create = new EventEmitter<Drink>();
  @Output() update = new EventEmitter<Drink>();
  @Output() delete = new EventEmitter<Drink>();

  icons: string[] = [
    'coca-cola',
    'fanta',
    'giusto',
    'sprite',
    'adria',
  ];

  handleCreate(myform: NgForm) {
    if(myform.valid) {
      this.create.emit(myform.value);
    }
    else {
      myform.form.markAllAsTouched();
      console.log("Invalid");
    }

  }

  handleUpdate(myform: NgForm) {
    if(myform.valid) {
      this.update.emit( { id: this.item.id, ...myform.value });
    }
    else {
      myform.form.markAllAsTouched();
      console.log("Invalid");
    }

  }

  handleDelete() {
    if (confirm(`Really delete ${this.item.name}?`))
    this.delete.emit( { ...this.item });
  }
}
