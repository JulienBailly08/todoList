import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  todoList: any;
  todoListFromServe:any;
  finished:boolean | undefined;

  strapiTodoSub :Subscription | undefined;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.strapiTodoSub = this.todoService.getTodoListFromStrapi().subscribe({
      next:(todos)=>{
        this.todoListFromServe = todos["data"];
        this.finished=true;
      },
      error:(error)=>{
        this.finished = false;
        console.log('Erreur'+error)
      },
      complete() {
        console.log('finished !')
      },
    });
  }
  ngOnDestroy(): void {
    this.strapiTodoSub?.unsubscribe();
  }
}
