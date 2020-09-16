import React, { Component } from 'react';

class NewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=9z4HbwE8tPLBjvMQnzxzXnMc7aAYBq6Q')
    .then(res => res.json())
    .then(data => console.log('data', data));
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }

}

export default NewsContainer;
