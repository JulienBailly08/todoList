import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  constructor(private http: HttpClient) { }

  public getTodoListFromStrapi():Observable<any>{
    return this.http.get(environment.apiUrl+'todos?populate=*');
  }

  public createTodo(){}

  public updateTodo(){}

  public eraseTodo(){}
  
}
