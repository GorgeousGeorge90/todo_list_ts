import React, {useRef} from 'react';



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
        <>
            <input
                type="text"
                placeholder={placeholder}
                ref={newRef}
            />
            <button onClick={onClick}>New task</button>
        </>
    )
}

export default BaseForm