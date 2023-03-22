import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/itask';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

@Input() item!: ITask;
@Input() nr!: number;
@Output() editEvent = new EventEmitter<ITask>();
@Output() deleteEvent = new EventEmitter<ITask>();

editOn: boolean = false;
newValue!: string;

ngOnInit(): void {
  this.newValue =  this.item.description;
}

showInput() {
  this.editOn = !this.editOn;
}

editItem() {
  this.editOn = !this.editOn;
  return this.editEvent.emit({ id: this.item.id, description: this.newValue });
}

deleteItem() {
  return this.deleteEvent.emit({ id: this.item.id, description: this.item.description });
}

}
