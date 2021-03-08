import './App.css';
import React from 'react'


class HomeJs extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            wasAnimation: false,
            wasScroll: false
        }     
      }
      
      jsAnimation = () => { 
          setTimeout(() => {
              if (this.state.wasAnimation === false){                
        var current = 0;
        let intervalId = setInterval(function(){
        let JsText = ['J|S','Ja|S','Jav|S','Java|S','JavaSc|','JavaScr|','JavaScri|','JavaScrip|','JavaScript']          
          document.querySelector('.window-js').textContent = JsText[current]
          current++;
          
          if(current >= JsText.length) clearInterval(intervalId);
          
          
        }, 100);
    }
    this.setState({wasAnimation: true})
    console.log(this.state.wasAnimation)
      }, 1000);
      setTimeout(() => {  
          if(this.state.wasScroll == false){
            window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'            
            })
        } this.setState({wasScroll: true})  
      }, 2500);      
    } 
      

      render() {        
        return (
          <div 
          onMouseEnter={() => this.jsAnimation()} 
          className='home-js'
           >  
              <div className='window-js'>JS</div>
              
          </div>
        );
        }
      }


export default HomeJs