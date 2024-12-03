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
    this.httpClient.get(`${this.baseURL}/${this.endpoint}`);
  }

  createTodo(todo: Todo) {
    this.httpClient.post(`${this.baseURL}/${this.endpoint}`, todo);
  }

  updateTodo(id: number, todo: Todo) {
    this.httpClient.put(`${this.baseURL}/${this.endpoint}/${id}`, todo);
  }

  deleteTodo(id: number) {
    this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${id}`);
  }
}
