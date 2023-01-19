import React, {useRef} from 'react';
import styles from './BaseForm.module.scss'



interface TodoFormProps {
    placeholder: string,
    handleSubmit:(text:string)=> void,
}


const BaseForm = ({handleSubmit, placeholder}:TodoFormProps) => {
    const newRef = useRef<HTMLInputElement | null>(null)

    const onClick = ()=>{
        if (newRef.current?.value) {
            handleSubmit(newRef.current.value)
            newRef.current.value = ''
        }
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={placeholder}
                ref={newRef}
            />
            <button onClick={onClick}>New task</button>
        </div>
    )
}

export default BaseForm