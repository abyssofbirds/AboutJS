import { useState } from "react"


function TodoList (props) {
    const todoItems = props.tasks.map(tasks =>
    <div className={(tasks.completed==false)? 'todo-item' : 'todo-item completed'}> 
        <div 
             
            key={tasks.id}
            completed={tasks.completed}
            id={tasks.id}
            >{tasks.name}</div><div>
            <button 
                onClick={()=>props.removingTodo(tasks.name)}                         
               >&#9746;</button>
               <button
               onClick={()=>props.handleChangeCompleted(tasks.name)}>&#9745;</button> 
               <button 
               onClick={()=>props.handleChangePositionUp(tasks.name)}>&uArr;</button>
               <button
               onClick={()=>props.handleChangePositionDown(tasks.name)}>&dArr;</button>
               <button
               onClick={(event)=>props.handleChangeName(event, tasks.name)}>&#9998;</button>
        </div>
        
        </div>)
    return(
        <div
        className='todo-list'>{todoItems}</div>
        
    )
}

export default TodoList