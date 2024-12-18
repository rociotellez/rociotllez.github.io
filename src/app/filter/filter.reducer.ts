import { Action, createReducer, on } from "@ngrx/store";
import { setFilter, validFilters } from "./filter.actions";

export const initialState: validFilters = 'all' as validFilters;

const _filterReducer = createReducer( initialState,
    on(setFilter, (state, { filter }) => filter )

 );

export function filterReducer(state: validFilters, action: Action) {
    return _filterReducer(state, action);
}   