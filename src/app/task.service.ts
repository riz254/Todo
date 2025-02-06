import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model'; // Import your task model

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private taskArray: Task[] = [
  //   { taskName: 'Brush teeth', description: 'lorem10', isCompleted: false, dueDate: '2025-02-06' },
  // ];

  private apiUrl = 'http://172.16.8.24:8080/api/todos'; // URL of your Spring Boot API
  private tasksSubject = new BehaviorSubject<Task[]>([]); // Observable to hold tasks
  tasks$ = this.tasksSubject.asObservable(); // Exposing the observable to be subscribed to

  constructor(private http: HttpClient) {}

  // Get tasks from the backend and update the BehaviorSubject
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  // addTask(task: Task) {
  //   this.taskArray.push(task);
  //   this.tasksSubject.next(this.taskArray); // Update the subscribers
  // }

  // Add a new task (POST) to the backend and update the task list
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // deleteTask(index: number) {
  //   this.taskArray.splice(index, 1);
  //   this.tasksSubject.next(this.taskArray);
  // }

  // Delete a task (DELETE) from the backend and update the task list
  deleteTask(id: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }

  // toggleTaskCompletion(index: number) {
  //   console.log(this.taskArray);
  //   this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  //   this.tasksSubject.next(this.taskArray);
  // }

  // return new Observable(); // Return an empty observable if the task is not found
}
