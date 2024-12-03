import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseURL = 'https://jsonplaceholder.typicode.com';
  endpoint = 'todos';

  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<Todo[]>(`${this.baseURL}/${this.endpoint}`);
  }

  findByIdTodo(id: number) {
    return this.httpClient.get<Todo>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`${this.baseURL}/${this.endpoint}`, todo);
  }

  updateTodo(id: number, todo: Partial<Omit<Todo, 'id'>>) {
    return this.httpClient.patch(
      `${this.baseURL}/${this.endpoint}/${id}`,
      todo
    );
  }

  deleteTodo(id: number) {
    return this.httpClient.delete<void>(
      `${this.baseURL}/${this.endpoint}/${id}`
    );
  }
}
