import React, { useState } from 'react'
import InputTodo from '../InputTodo'
import ChangeInput from './ChangeInput'
import TodoList from './Todo-List'

function TodoPage () {          
        const [tasks, addTodo] = useState([]) 
        const [inputValue, setInputValue] = useState('')
        const [, deleteTodo] = useState(tasks)
        const [, changeCompleted] = useState(tasks)
        const [, changePosition] = useState(tasks)
        const [prevPosition, getPosition] = useState({x: '', y: ''})
        const [, changeName] = useState(tasks)
        const [thisIndex, getIndex] = useState()
        const [prevName, newName] = useState(tasks.name)
        const [newNameTask, changeNameFromInput] = useState('')

        const handlechangeNameFromInput = (event) => {
            changeNameFromInput(event.target.value)
            console.log(newNameTask);
        }


        const removingTodo = (name) =>{ 
            let thisTaskIndex = tasks.indexOf(tasks.find(item => item.name == name))
            deleteTodo(tasks.splice(thisTaskIndex, 1))     
        }

        const handleChangeCompleted = (name) => {            
            let thisTaskIndex = tasks.indexOf(tasks.find(item => item.name == name))
            changeCompleted(tasks[thisTaskIndex].completed = !tasks[thisTaskIndex].completed)
            console.log(tasks[thisTaskIndex]);
        }        
        
        const handleChangeInput = (event) => {
            setInputValue(event.target.value)
        }   
        
        const handleChangePositionUp = (name) => {
            let thisTaskIndex = tasks.indexOf(tasks.find(item => item.name == name))
            changePosition([tasks[thisTaskIndex-1], tasks[thisTaskIndex]]=[tasks[thisTaskIndex], tasks[thisTaskIndex-1]])
        }
        const handleChangePositionDown = (name) => {
            let thisTaskIndex = tasks.indexOf(tasks.find(item => item.name == name))
            changePosition([tasks[thisTaskIndex], tasks[thisTaskIndex+1]]=[tasks[thisTaskIndex+1], tasks[thisTaskIndex]])
        }

        const handleChangeNameText = (event) => {
            event.preventDefault()           
            addTodo(tasks[thisIndex].name = newNameTask)
            console.log(tasks[thisIndex].name);
        }

        const handleChangeName = (e, name) => {
            const thisElement = e.target.parentNode.parentNode
            const xCoordinats = thisElement.getBoundingClientRect().x
            const yCoordinats = thisElement.getBoundingClientRect().y
            getIndex(tasks.indexOf(tasks.find(item => item.name == name)))
            getPosition({x: +xCoordinats, y: +yCoordinats}) 
            console.log(tasks);  

        }
      
      const submitChange = (event) => {
        event.preventDefault()
        if(inputValue !== ''){
            addTodo([...tasks, {
                name: inputValue,
                id: tasks.length + 1, 
                completed: false}]                            
                )        
        setInputValue('')     
            }                                                          
    }

   
        return( 
            <div className='todo-page'>
                <ChangeInput    
                onst handlechangeNameFromInput={handlechangeNameFromInput}           
                handleChangeNameText={handleChangeNameText}
                prevName={prevName}
                thisIndex={thisIndex}
                prevPosition={prevPosition}
                tasks={tasks}
                newNameTask={newNameTask}
                
                 /> 
                <div className='todo-name'>Todo List</div>
                <InputTodo  
                    submitChange={submitChange} 
                    handleChangeInput={handleChangeInput} 
                    inputValue={inputValue}
                 />   
                <TodoList 
                handleChangeName={handleChangeName}
                handleChangePositionUp={handleChangePositionUp}
                handleChangePositionDown={handleChangePositionDown}
                handleChangeCompleted={handleChangeCompleted}
                removingTodo={removingTodo}            
                tasks={tasks}
                key={tasks.id}/>  
                   
                </div>
        )
    }


export default TodoPage