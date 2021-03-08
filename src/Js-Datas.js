import React from 'react'
import BooleanJS from './Js-datas/Boolean';
import ModalWindow from './ModalWindow';
import NullJS from './Js-datas/Null';
import NumberJS from './Js-datas/Number';
import ObjectJS from './Js-datas/Object';
import StringJS from './Js-datas/String';
import UndefinedJS from './Js-datas/Undefined';
import SymbolJS from './Js-datas/SymbolJs';

class JsDatas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            wasAnimation: false,
            openModal: false,   
            typeOfModal: this.typeOfModal
        } 
        this.numberRef = React.createRef() 
             
      }
      animation = () => {         
        setTimeout(() => {
            if (this.state.wasAnimation == false) {
            var current = 0;
            let intervalId = setInterval(function(){
            let JsText = [
                'JS|',
                'J|S',
                '|JS',
                'Т|JS',
                'Ти|JS',
                'Тип|JS',
                'Типы|JS',
                'Типы |JS',
                'Типы д|JS',
                'Типы да|JS',
                'Типы дан|JS',
                'Типы данн|JS',
                'Типы данны|JS',
                'Типы данных|JS',
                'Типы данных |JS',
                'Типы данных в|JS',
                'Типы данных в JS']              
              document.querySelector('.third-page-name').textContent = JsText[current]
              current++;
              if(current >= JsText.length) clearInterval(intervalId);              
            }, 100);
        }
         this.setState({wasAnimation: true})
          }, 1000);      
    }        
    
    closeModal = () => {
      this.setState({openModal: false})
    } 
      scrollToDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        })
      }
      openModal = (text) => {
        const typeOfModal = text
        console.log(typeOfModal);
        this.setState({typeOfModal: text})
        this.setState({openModal: true})            
      }
      
      render() {        
        return (
          
            <div className='third-page'
            onMouseEnter={()=> this.animation()}>                
                <span className='third-page-name'>JS</span>
                <div className = 'js-datas'>                    
                    <NumberJS                     
                      openModal={this.openModal} />
                    <StringJS 
                      openModal={this.openModal} />
                    <BooleanJS 
                      openModal={this.openModal} /> 
                    <NullJS 
                      openModal={this.openModal} />
                    <UndefinedJS 
                      openModal={this.openModal} />
                    <ObjectJS 
                      openModal={this.openModal} />
                    <ModalWindow 
                      openModal={this.state.openModal} 
                      closeModal={this.closeModal} 
                      typeOfModal={this.state.typeOfModal} /> 
                    <div className='data-type invisible'></div>                    
                    <SymbolJS 
                      openModal={this.openModal} />
                    <div className='data-type non-border'
                    onClick={()=>this.scrollToDown()}><span className='arrow'>&#8679;</span></div> 
                </div>
              </div>
        )}
}

export default JsDatas 