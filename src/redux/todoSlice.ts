import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todos} from '../types/types';


export type TodoSlice = {
    text: string,
    list: Todos[],
}

const getBaseList = () => {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data): []
}

const initialState:TodoSlice = {
    text: '',
    list: getBaseList(),
}

const todoSlice = createSlice({
    name: '@todos',
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<string>)=> {
            const newTodo:Todos = {
                id: new Date().toString(),
                text: action.payload,
                complete: false,
            }

           state.list.push(newTodo)
        },
        completeTodo: (state, action:PayloadAction<Todos['id']>)=> {
            const todo = state.list.find(el => el.id === action.payload)

            if (todo) {
                todo.complete = !todo.complete
            }
        },
        deleteTodo: (state, action:PayloadAction<Todos['id']>)=> {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer

export const {
    addTodo,
    deleteTodo,
    completeTodo,
} = todoSlice.actions