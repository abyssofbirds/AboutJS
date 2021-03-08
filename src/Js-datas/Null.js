import React from 'react'

class NullJS extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return (
            <div className='data-type'
            onClick={()=>this.props.openModal('null')}>null</div>
          )
      }
}

export default NullJS