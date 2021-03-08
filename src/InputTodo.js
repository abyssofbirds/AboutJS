import React, {useState} from 'react'


function InputTodo (props) {            
        return(
            <div className='input-form'>
            <form 
                onSubmit={props.submitChange}
                onChange={props.handleChangeInput}                    
                >
                <input className='input-todo'
                    value={props.inputValue}  
                    placeholder='Введите название задачи'              
                />
            <button className='add-todo'
                ><span className='btn-add'>+</span>               
                </button>
                </form>
            </div>
        )
    }

export default InputTodo