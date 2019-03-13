import React, { Component } from 'react';
import './App.css';
import MyStories from './components/MyStories';
import AddStories from './components/AddStories';
class App extends Component {
  constructor(props){
    super(props);    
    this.state ={
      stories: this.props.stories
    }
  }
  addStories=(e)=>{
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const url = e.target.elements.url.value;
    const comments = e.target.elements.comments.value;
    const points = e.target.elements.points.value;
    const id = e.target.elements.id.value;
    var obj ={'title':title, 'author':author, 'url':url,
    'comments': comments, 'points':points, 'id':id};
    this.state.stories.push(obj);        
    this.setState((state)=>{
      return{stories: state.stories}
    }
        )
    
  }
  
  render() {  
    //{this.state.stories1.push(obj)}      
      return (
        <div>
          
          {this.state.stories.map ( (items, key) =>(
          <MyStories stories={items} key={key}/>))}
          <AddStories addStories={this.addStories} />
          
        </div>        
    )
  }
}

export default App;
