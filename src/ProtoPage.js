import React from 'react'

class ProtoPage extends React.Component{
    constructor(props){
        super(props)        
      }
      render(){
          return(
            <div className='proto-page'>
               <div className='proto-container'>__proto__</div>
               <hr className='line'></hr>
               <div className='prototype-container'>Prototype</div>
            </div>
          )
      }
    }

    export default ProtoPage