import { createAction, props } from "@ngrx/store";

export const addTodo = createAction( 
    '[TODO] Add', 
    props<{ title: string }>() 
);

export const toggleTodo = createAction( 
    '[TODO] Toggle', 
    props<{ id: number }>() 
);

export const editTodo = createAction( 
    '[TODO] Edit', 
    props<{ id: number, title: string }>() 
);

export const deleteTodo = createAction( 
    '[TODO] Delete', 
    props<{ id: number }>() 
);

export const toggleAll = createAction(
    '[TODO] Toggle All',
    props<{ completed: boolean }>()
);

export const clearCompleted = createAction(
    '[TODO] Clear completed'
);