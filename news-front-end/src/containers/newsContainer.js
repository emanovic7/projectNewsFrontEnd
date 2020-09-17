import React, { Component } from 'react';
import News from '../components/news';

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
    .then(data => this.setState({ news: data }));
  }

  render(){
    debugger
    return(
      <div>
        <News news={this.state.news} />
      </div>
    )
  }

}

export default NewsContainer;
