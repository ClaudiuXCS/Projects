import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proiect-scss';
  message!: string;
  newMessage!: string;
  ngOnInit()
  {
    this.message = 'sall';
  }

  handleInput(event: Event) {
   const { value } = event.target as HTMLInputElement;
   this.newMessage = value;
  }
}


