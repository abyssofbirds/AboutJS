import React from 'react'

class UndefinedJS extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return (
            <div className='data-type'
            onClick={()=>this.props.openModal('und')}>undefined</div>
          )
      }
}

export default UndefinedJS