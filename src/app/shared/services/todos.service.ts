import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseURL = 'https://jsonplaceholder.typicode.com';
  endpoint = 'todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(page: number = 1, limit: number = 10) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return this.httpClient
      .get<Todo[]>(`${this.baseURL}/${this.endpoint}`)
      .pipe(map((todos) => todos.slice(startIndex, endIndex)))
      .pipe(delay(1000));
  }

  findByIdTodo(id: number) {
    return this.httpClient.get<Todo>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  createTodo(todo: Partial<Todo>) {
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
