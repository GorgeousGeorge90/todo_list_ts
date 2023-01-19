import NewTodoForm from './TodoForm/NewTodoForm';
import TodoList from './TodoList/TodoList';
import React from 'react';
import styles from './Main.module.scss'


const Main = ()=> {
    return (
        <div className={styles.container}>
            <NewTodoForm/>
            <TodoList/>
        </div>
    )
}

export default Main