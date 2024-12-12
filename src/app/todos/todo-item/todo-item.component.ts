import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  checkComplete : FormControl = new FormControl();
  txtInput: FormControl = new FormControl();

  editing: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.checkComplete = new FormControl( this.todo?.completed );
    this.txtInput = new FormControl( this.todo?.title,  Validators.required );

    this.checkComplete.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggleTodo({ id: this.todo!.id }) );
    });
  }

  edit() {  
    this.editing = true;
    this.txtInput.setValue( this.todo?.title );
    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;

    if ( this.txtInput.invalid || this.txtInput.value === this.todo?.title ) { return; }

    this.store.dispatch( actions.editTodo({ id: this.todo!.id, title: this.txtInput.value }) );
  }

  delete() {
    this.store.dispatch( actions.deleteTodo({ id: this.todo!.id }) );
  }

}
