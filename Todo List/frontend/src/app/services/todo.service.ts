import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../models/itask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

_url: string;

  constructor(private http: HttpClient) { 
    this._url = "http://localhost:3000/tasks"
  }

readAll() : Observable<ITask[]> {
 return this.http.get<ITask[]>(this._url); 
}

create(payload: ITask)  {
  return this.http.post<ITask>(this._url,payload); 
 }

delete(payload: ITask) {
  return this.http.delete<ITask[]>(this._url + '/' + payload.id); 
 }

update(payload: ITask) {
  return this.http.put<ITask[]>(this._url+ '/' + payload.id, payload); 
 }

}
