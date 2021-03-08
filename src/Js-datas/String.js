import React from 'react'

class StringJS extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return (
            <div className='data-type'
            onClick={()=>this.props.openModal('str')}>String</div>
          )
      }
}

export default StringJS