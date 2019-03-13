import React from "react";

class MyStories extends React.Component {
  state={
  //stories: this.props.stories,
    clicked: false,
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.setState({     
      clicked: true
    })
  }
    
   render() {  
            
    return (
      <form onSubmit={this.onSubmit} > 
      <button>See Details</button> 
      
      <div>         
        {this.state.clicked ? (
          <div>
            <li>Title: {this.props.stories.title}</li>
            <li> Author: {this.props.stories.author}</li>
            <li> URL: {this.props.stories.url}</li>
            <li> Comments: {this.props.stories.num_comments} </li>
            <li> Points: {this.props.stories.points}</li>
            <li> ID: {this.props.stories.objectID}</li>
           </div>          
        ):(
          <div />         
        )}        
        </div>
        </form>    
     )}}
export default MyStories;