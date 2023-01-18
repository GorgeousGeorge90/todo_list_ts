import ITodoItem from './TodoItem/TodoItem';
import {useSelector} from "react-redux";
import {getList} from "../../selectors/todoSelectors";
import TodoItem from './TodoItem/TodoItem';
import {useAppDispatch} from "../../redux/redux-hooks";
import {deleteTodo} from "../../redux/todoSlice";
import {Todos} from "../../types/types";

const TodoList = ()=> {
    const list = useSelector(getList)
    const dispatch = useAppDispatch()

    const deleteTask = (id:Todos['id'])=>{
        dispatch(deleteTodo(id))
    }

    return (
        <ul>
            {
                list.map(todo => {
                    return <TodoItem key={todo.id} id={todo.id} text={todo.text} deleteTodo={deleteTask}/>
                })
            }
        </ul>
    )
}

export default TodoList