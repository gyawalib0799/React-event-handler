import React, { Component } from 'react'

export default class AddStories extends Component {
  render() {
    return (
      <div>          
        <form onSubmit={this.props.addStories}>
        <p>Add Stories</p>
            <input type="text" name="title" placeholder="Enter Title"></input>
            <input type="text" name="author" placeholder="Enter Author"></input>
            <input type="text" name="url" placeholder="Enter URL"></input>
            <input type="text" name="comments" placeholder="Enter Comments"></input>
            <input type="text" name="points" placeholder="Enter Points"></input>
            <input type="text" name="id" placeholder="Enter ID"></input>
            <br />
            <button>Add Items</button>
        </form>
      </div>
    )
  }
}
