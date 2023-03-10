import BaseForm from './BaseForm';
import {useAppDispatch} from "../../../redux/redux-hooks";
import {addTodo} from "../../../redux/todoSlice";



const NewTodoForm = () => {
    const dispatch = useAppDispatch()

    const createTodo = (text:string)=> {
        dispatch(addTodo(text))
    }


    return <BaseForm placeholder={'new todo'} handleSubmit={createTodo}/>


}

export default NewTodoForm