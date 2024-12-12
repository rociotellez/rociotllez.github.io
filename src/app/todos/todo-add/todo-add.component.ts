import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl( '', Validators.required );  
  }

  addTodo() { 
    if ( this.txtInput.invalid ) { return; }
    
    this.store.dispatch( actions.addTodo ({ title: this.txtInput.value }) );
    this.txtInput.reset();
  }

}
