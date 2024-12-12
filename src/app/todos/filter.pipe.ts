import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], validFilters: validFilters): Todo[] {
    console.log(todos);
    // devolver solo los todos que cumplan el filtro seleccionado
    switch (validFilters) {
      case 'completed':
        return todos.filter( todo => todo.completed );
      case 'pending':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }
  }

}
