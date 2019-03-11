import React from "react";

class MyStories extends React.Component {
  state={
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
            <li> Author: {this.props.stories2.author}</li>
            <li> URL: {this.props.stories2.url}</li>
            <li> Comments: {this.props.stories2.num_comments} </li>
            <li> Points: {this.props.stories2.points}</li>
            <li> ID: {this.props.stories2.objectID}</li>
           </div>          
        ):(
          <div />         
        )}        
        </div>
        </form>    
     )}}
export default MyStories;