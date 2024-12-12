import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import * as actions from '../todo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit{

  completed = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch( actions.toggleAll({ completed: this.completed })  );
  }

}
