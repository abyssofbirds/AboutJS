import React from 'react'

class NumberJS extends React.Component{
    constructor(props){
        super(props)  
        
      }
      
      render(){
          return (
            <div className='data-type'            
            onClick={()=>this.props.openModal('numb')} 
            >Number</div>
          )
      }
}

export default NumberJS