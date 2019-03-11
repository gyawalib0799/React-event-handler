import React, { Component } from 'react';
import './App.css';
import MyStories from './components/MyStories';

class App extends Component {
  constructor(props){
    super(props);    
    this.state ={
      stories1: this.props.stories      
    }
  } 
  
  render() {        
      return (
        <div>
          {this.state.stories1.map ( (items, key) =>(
          <MyStories stories2={items} key={key}/>))}
        </div>        
    )
  }
}

export default App;
