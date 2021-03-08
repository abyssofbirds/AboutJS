import './App.css';
import React from 'react'
import cn from 'classnames'

class App extends React.Component{
  constructor(props){
    super(props)  
    this.myRef = React.createRef();  
    this.state = {hovered: false}
  }
  changeBackWhite = () => {
    const AppBg = this.myRef
    if (AppBg.className === 'App'){
      AppBg.className = 'App whiteBg'
    } else {
      AppBg.className = 'App'
    }
  }
  changeBackgroundToBlackColor = () => {  
    this.myRef.current.className = 'App blackBg' 
  }
  scrolltoNext = () => {
      window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });               
    } 
  render() {
  return (
    <div className={cn('App', { blackBg: this.state.hovered })}
    ref={this.myRef}>
      <p className='author-name'>by Dmitriy Deniskin</p>
      <button onMouseEnter={()=> this.setState({
        hovered: true
      })} 
      onMouseOut={()=> this.setState({
        hovered: false
      })}
      onClick={()=> this.scrolltoNext()}
      className='start-btn'>начать</button>
    </div>
  );
  }
}

export default App;
