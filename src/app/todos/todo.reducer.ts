import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { addTodo, clearCompleted, deleteTodo, editTodo, toggleAll, toggleTodo } from "./todo.actions";

export const initialState: Todo[] = [
    new Todo('Preparar las maletas para la navidad'),
    new Todo('Cuna'),
    new Todo('Biberones y leche')
];

const _todoReducer = createReducer( initialState,
    on(addTodo, (state, { title }) => [...state, new Todo (title)] ),

    on(deleteTodo, (state, { id }) => state.filter( todo => todo.id !== id ) ),

    on(toggleTodo, (state, { id }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });
    }),

    on(editTodo, (state, { id, title }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title
                }
            } else {
                return todo;
            }
        });
    }),

    on(toggleAll, (state, { completed }) => {
        return state.map( todo => {
            return {
                ...todo,
                completed: completed
            }
        });
    }),

    on(clearCompleted, (state) => state.filter( todo => !todo.completed ) )

);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}