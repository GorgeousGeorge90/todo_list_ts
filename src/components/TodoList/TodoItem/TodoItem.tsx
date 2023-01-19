import {Todos} from '../../../types/types';
import React from "react";
import styles from './TodoItem.module.scss';


interface ITodoItem extends Todos {
    children?: React.ReactNode,
    deleteTodo: (id:Todos['id'])=> void,
    completeTodo: (id:Todos['id'])=> void,
    style?:React.CSSProperties,
}

const TodoItem= ({id,text,deleteTodo,completeTodo,complete}:ITodoItem)=> {

    return (
        <li className={styles.container}>
            <span><input  onClick={()=>completeTodo(id)}  type="checkbox" checked={complete}/></span>
            <span>{text}</span>
            <span onClick={()=>deleteTodo(id)}>&#128165;</span>
        </li>
    )
}

export default TodoItem