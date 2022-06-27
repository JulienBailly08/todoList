import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoList = [
    {
        "id": 1,
        "attributes": {
            "title": "Strapi",
            "description": "Réussir à créer bdd relationelle",
            "isDone": false,
            "createdAt": "2022-06-18T13:06:39.701Z",
            "updatedAt": "2022-06-19T13:01:49.894Z",
            "publishedAt": "2022-06-18T13:06:42.685Z",
            "category": {
                "data": {
                    "id": 1,
                    "attributes": {
                        "name": "Back",
                        "createdAt": "2022-06-18T13:05:08.027Z",
                        "updatedAt": "2022-06-18T13:05:09.052Z",
                        "publishedAt": "2022-06-18T13:05:09.050Z"
                    }
                }
            }
        }
    },
    {
        "id": 2,
        "attributes": {
            "title": "titre",
            "description": "description",
            "isDone": true,
            "createdAt": "2022-06-18T13:07:09.602Z",
            "updatedAt": "2022-06-18T13:15:33.963Z",
            "publishedAt": "2022-06-18T13:07:09.601Z",
            "category": {
                "data": null
            }
        }
    },
    {
        "id": 3,
        "attributes": {
            "title": "titre",
            "description": "description",
            "isDone": false,
            "createdAt": "2022-06-18T13:07:52.934Z",
            "updatedAt": "2022-06-18T13:07:52.934Z",
            "publishedAt": "2022-06-18T13:07:52.933Z",
            "category": {
                "data": null
            }
        }
    },
    {
        "id": 4,
        "attributes": {
            "title": "New One",
            "description": "Lorem sa mère",
            "isDone": true,
            "createdAt": "2022-06-18T14:41:07.373Z",
            "updatedAt": "2022-06-19T13:01:21.321Z",
            "publishedAt": "2022-06-18T14:41:07.369Z",
            "category": {
                "data": {
                    "id": 1,
                    "attributes": {
                        "name": "Back",
                        "createdAt": "2022-06-18T13:05:08.027Z",
                        "updatedAt": "2022-06-18T13:05:09.052Z",
                        "publishedAt": "2022-06-18T13:05:09.050Z"
                    }
                }
            }
        }
    }
  ]

  public getTodoList(){
    return this.todoList
  }
  
  constructor() { }


}
