import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  // taskArray: any[] = [];
  taskArray: Task[] = []; // Task array to hold tasks fetched from the backend

  constructor(private taskService: TaskService) {}

  // ngOnInit lifecycle hook to load tasks from the backend
  ngOnInit(): void {
    // this.taskService.tasks$.subscribe(tasks => {
    //   this.taskArray = tasks;
    // });

    this.taskService.getTasks().subscribe((tasks) => {
      this.taskArray = tasks;
    });
  }

  // onDelete(index: number) {
  //   this.taskService.deleteTask(index);
  // }

  // Delete a task
  onDelete(taskId: number | undefined): void {
    if (taskId !== undefined) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.taskArray = this.taskArray.filter((task) => task.id !== taskId);
      });
    } else {
      console.error('Task ID is undefined');
    }
  }

  onCheck(task: Task): void {
    // Toggle the temporary completion state
    task.completed = !task.completed;
  }

  confirmUpdate(task: Task): void {
    if (task.id !== undefined) {
      // Prepare the updated task object
      const updatedTask = { ...task, completed: task.completed };

      // Send API request to update the task
      this.taskService.toggleTaskCompletion(task.id).subscribe(
        (response) => {
          // Update taskArray with new values from response
          this.taskArray = this.taskArray.map((t) =>
            t.id === task.id ? response : t
          );

          // Show success notification (if MatSnackBar is used)
          alert('Task completed successfully');
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
    } else {
      console.error('Task ID is undefined');
    }
  }

  // onCheck(index: number) {
  //   this.taskService.toggleTaskCompletion(index);
  // }

  // writing a function to add a task
  //   taskArray = [{taskName:'Brush teeth', description: "lorem10", isCompleted: false, dueDate: "2025-02-06"} ];

  //   // handling submit buttons
  //   onSubmit(form: NgForm) {
  //     console.log(form)

  //     // get data from form to task array
  //     this.taskArray.push({
  //       taskName: form.controls['task'].value,
  //       description: form.controls['description'].value,
  //       isCompleted: false,
  //       dueDate: form.controls['dueDate'].value
  //     })
  //     // to clear the form after submit
  //     form.resetForm()
  //   }

  //   // handling delete buttons
  //   onDelete(index: number) {
  //     console.log(index);

  // // splice to delete with index
  //     this.taskArray.splice(index, 1);
  //   }

  //   // checkbox to mark as completed
  //   onCheck(index: number) {
  //     console.log(this.taskArray);

  //     // to toggle the checkbox --change the value from false to true
  //     this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  //   }
}
