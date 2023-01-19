import {useSelector} from 'react-redux';
import {getList} from "../../../selectors/todoSelectors";
import TodoItem from './TodoItem/TodoItem';
import {useAppDispatch} from "../../../redux/redux-hooks";
import {completeTodo, deleteTodo} from "../../../redux/todoSlice";
import {Todos} from "../../../types/types";
import styles from './TodoList.module.scss'

const TodoList = ()=> {
    const list = useSelector(getList)
    const dispatch = useAppDispatch()

    const deleteTask = (id:Todos['id'])=>{
        dispatch(deleteTodo(id))
    }

    const completeTask = (id:Todos['id'])=> {
        dispatch(completeTodo(id))
    }


    return (
        <div className={styles.container}>
            <ul>
            {
                list.map(todo => {
                    return <TodoItem
                        complete={todo.complete}
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        deleteTodo={deleteTask}
                        completeTodo={completeTask}
                    />
                })
            }
            </ul>
        </div>
    )
}

export default TodoList