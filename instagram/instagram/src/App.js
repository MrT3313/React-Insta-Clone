import React, { Component } from 'react';
import './App.css';

import dummyData from './components/dummy-data'
import PostContainer from './components/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          { dummyData.map( post => (
            <PostContainer post={post} />
          )) }
          
        </header>
      </div>
    );
  }
}

export default App;
