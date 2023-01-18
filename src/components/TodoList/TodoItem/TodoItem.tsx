import {Todos} from '../../../types/types';

interface ITodoItem extends Omit<Todos, 'complete'> {
    children?: React.ReactNode,
    deleteTodo: (id:Todos['id'])=> void,
}

const TodoItem= ({id,text,deleteTodo}:ITodoItem)=> {

    return (
        <li>
            <span>{text}</span>
            <span onClick={()=>deleteTodo(id)}>X</span>
        </li>
    )
}

export default TodoItem