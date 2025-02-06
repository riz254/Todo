export class Task {
  id?: number; // Still optional
  title: string;
  description: string;
  completed: boolean;
  date: Date;

  constructor(
    title: string,
    description: string,
    completed: boolean,
    date: Date,
    id?: number // Move id to the end and make it optional
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.date = date;
  }
}
