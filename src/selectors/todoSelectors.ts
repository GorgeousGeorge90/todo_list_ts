import {RootState} from '../redux/store';

export const getList = (state:RootState) => state.todos.list
export const getText = (state:RootState) => state.todos.text
