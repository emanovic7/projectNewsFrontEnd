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
    fetch(`https://api.nytimes.com/svc/archive/v1/1945/4.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({ news: data }));
  }

  render(){
    return(
      <div>
        <News news={this.state.news} />
      </div>
    )
  }

}

export default NewsContainer;
