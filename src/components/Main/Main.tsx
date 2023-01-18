import NewTodoFrom from '../TodoForm/NewTodoFrom';
import TodoList from '../TodoList/TodoList';
import React from 'react';
import styles from './Main.module.scss'


const Main = ()=> {
    return (
        <div className={styles.container}>
            <NewTodoFrom/>
            <TodoList/>
        </div>
    )
}

export default Main