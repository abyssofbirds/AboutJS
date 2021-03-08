import React from 'react'
 
function ChangeInput (props) {
    const topX = props.prevPosition.x
    const right = props.prevPosition.y
    const thisValueForChanging = (props.thisIndex) ? (props.tasks[props.thisIndex].name) : ' '
    // const thisValue =  props.newNameTask || thisValueForChanging
    const thisValue =  props.newNameTask 

    // const thisValueFoeChanging = props.tasks[1].name

    return (
        <form style={{
            position: 'absolute',
            zIndex: '100',
            backdropFilter: 'blur(3px)',
            marginTop: right, 
            marginLeft: topX
        }}
            
        > 
            <input 
            value={thisValueForChanging}   
            onChange={props.handlechangeNameFromInput}
            onSubmit={props.hanleChangeNameText}
            ></input>
            <button></button>
        </form>
    )
}

export default ChangeInput