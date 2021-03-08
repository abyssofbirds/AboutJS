import React from 'react'


class ObjectJS extends React.Component{
    constructor(props){
        super(props) 
        this.myRef = React.createRef()           
      }
      
      
      render(){
          return (
            <div className='data-type'
            ref ={this.myRef}
            onClick={()=>this.props.openModal('obj')}
            >&#123;Object&#125;</div> 
          )
      }
}

export default ObjectJS