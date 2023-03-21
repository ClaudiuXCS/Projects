import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap, of, map, catchError, throwError, retryWhen, delay, take, Observable } from 'rxjs';

import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {

  private drinks: Drink[] = [];
  
  constructor(private http: HttpClient) { }

  read(): Observable<Drink[]> {
    if(this.drinks.length)
    {
      return of(this.drinks);
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }).append('Api-Token', '1234abcd');

    const options = {
      headers,
    };

    return this.http.get<Drink[]>(`/api/drinks`, options)
    .pipe(tap((drinks) => { this.drinks = drinks }),
    retryWhen((errors) => {
      return errors.pipe(delay(5000), take(2));
    }),
    catchError(this.handleError));
    //return this.drinks;
  }
  
  readOne(id: string | null) {
    return this.read().pipe(
      map((drinks) => { 
        const drink = drinks.find((drink: Drink) => drink.id === id);
    
        if(drink)
          return drink;
    
        return { name: '', icon: '', price: 0, description: ''}
      })
    );
  }

  create(payload: Drink) {
    return this.http.post<Drink>(`/api/drinks`, payload).pipe(
      tap((drink) => { this.drinks = [...this.drinks, drink]
      }),
      catchError(this.handleError)
    );
    // this.drinks = [...this.drinks, payload];
  }

  update(payload: Drink) {
    return this.http.put<Drink>(`/api/drinks/${payload.id}`, payload).pipe(
      tap((drink) => {
        this.drinks = this.drinks.map((item: Drink) => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        });
        console.log(this.drinks);
       }),
       catchError(this.handleError)
    )
  }

  delete(payload: Drink) {
    return this.http.delete<Drink>(`/api/drinks/${payload.id}`).pipe(
      tap(() => {
        this.drinks = this.drinks.filter((drink: Drink) => drink.id !== payload.id);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse ) {
    if(err.error instanceof ErrorEvent) {
      //client-side
      console.warn('Client ',err.message);
    }
    else {
      //server error
      console.warn('Server ',err.status);
    }
    return throwError(() => new Error(err.message));
   }
}
