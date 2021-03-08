
import React from 'react'
import {NumberJsx, StringJsx} from './Js-datas/ModalDatas' 

class ModalWindow extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef() 
                   
    }
   
    
     
        render(){          
          return(
              <div className= {'modal ' + (!this.props.openModal ?  ' non-display': '') }             
              ><button className='btn-close' 
              onClick={()=>{this.props.closeModal()}}>&#10010;</button>              
              <div>{this.props.typeOfModal==='numb'? NumberJsx :
                    this.props.typeOfModal==='str'? StringJsx: null}</div>
              
              </div>
          )
      }
    }
    

    export default ModalWindow