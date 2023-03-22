import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './containers/form/form.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [ 
  { path: 'tasks', component: FormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'tasks'}, 
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
