import React from 'react';
import logo from './logo.svg';
import './App.css';

//containers
import NewsContainer from './containers/newsContainer';

function App() {
  return (
    <div className="App">
      <div data-test="component-app">
        <h1 data-test="title-header">This is a news Application</h1>

        <NewsContainer />
      </div>
    </div>
  );
}

export default App;
