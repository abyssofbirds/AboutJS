import React from 'react'

class BooleanJS extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return (
            <div className='data-type'
            onClick={()=>this.props.openModal('bool')}>Boolean</div>
          )
      }
}

export default BooleanJS