export class Todo {
  public id: number;
  public title: string;
  public completed: boolean;

  constructor( title: string ) {
    this.title = title;
    this.id = Math.random();
    this.completed = false;
  }
}   