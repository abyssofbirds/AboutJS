import React from 'react'

class SymbolJS extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return (
            <div className='data-type'
            onClick={()=>this.props.openModal('symb')}>Symbol</div>
          )
      }
}

export default SymbolJS