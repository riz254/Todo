import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model'; // Adjust based on your file structure

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  // getting the task array from task service
  constructor(private taskService: TaskService) {}

  // Submit the form to create a new task
  onSubmit(form: NgForm) {
    const newTask = new Task(
      form.controls['task'].value, // Now 'task' is mapped to 'title' in Task model
      form.controls['description'].value, // 'description' remains the same
      false, // 'isCompleted' should be false initially
      new Date(form.controls['dueDate'].value) // Convert 'dueDate' string to Date object
    );

    this.taskService.addTask(newTask).subscribe((response) => {
      // Handle success
    });
    alert('Task added successfully');
    form.resetForm();
  }
}

// handling submit buttons
// onSubmit(form: NgForm) {
//   console.log(form)

//   // get data from form to task array
//   this.taskArray.push({
//     taskName: form.controls['task'].value,
//     description: form.controls['description'].value,
//     isCompleted: false,
//     dueDate: form.controls['dueDate'].value
//   })
//   // to clear the form after submit
//   form.resetForm()
// }

//getting the task array from task service
// onSubmit(form: NgForm) {
//   if (form.valid) {
//     this.taskService.addTask({
//       title: form.controls['task'].value,
//       description: form.controls['description'].value,
//       isCompleted: false,
//       dueDate: form.controls['dueDate'].value
//     });
//     form.resetForm();
//   }
// }
