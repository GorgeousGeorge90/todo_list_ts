import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todos} from '../types/types';


export type TodoSlice = {
    status: boolean,
    list: Todos[],
}


const initialState:TodoSlice = {
    status: false,
    list: [],
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
        },
        changeTodo: (state,action:PayloadAction<Omit<Todos, 'complete'>>)=> {
            const todo = state.list.find(el => el.id === action.payload.id)
            state.status = !state.status

            if (todo) {
                todo.text = action.payload.text
            }
        }
    }
})

export default todoSlice.reducer

export const {
    addTodo,
    deleteTodo,
    completeTodo,
    changeTodo,
} = todoSlice.actions