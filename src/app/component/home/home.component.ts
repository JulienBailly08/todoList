import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoList:any;
  
  constructor(private todoService : TodosService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
  }

}
