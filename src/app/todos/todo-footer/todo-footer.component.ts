import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as filterActions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filterActions.validFilters = 'all';
  filters: filterActions.validFilters[] = ['all', 'completed', 'pending'];

  pending: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  updateFilter( filter: filterActions.validFilters ) {
    this.store.dispatch( filterActions.setFilter({ filter }) );
  }

  clearCompleted() {
    this.store.dispatch( todoActions.clearCompleted() );
  } 

}
