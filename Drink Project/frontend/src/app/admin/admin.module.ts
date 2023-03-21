import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { DrinksListComponent } from './containers/drinks-list/drinks-list.component';
import { DrinkSingleComponent } from './containers/drink-single/drink-single.component';

// components
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { DrinkFormComponent } from './components/drink-form/drink-form.component';

// services

// guards

// directives


export const routes: Routes = [ 
  { path: 'drinks', component: DrinksListComponent},
  { path: 'drinks/new', component: DrinkSingleComponent, data : { isEdit: false }}, 
  { path: 'drinks/:id', component: DrinkSingleComponent, data : { isEdit: true }}, 
  { path: '', pathMatch: 'full', redirectTo: 'drinks'}, 
];

@NgModule({
  declarations: [
    DrinksListComponent,
    DrinkSingleComponent,
    DrinkCardComponent,
    DrinkFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule { }
