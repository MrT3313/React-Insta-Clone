import React, { Component } from 'react';
import './App.css';

import dummyData from './components/dummy-data'

import PostContainer from './components/PostContainer'
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          
          { dummyData.map( post => (
            <PostContainer post={post} />
          ))}
      </div>
    );
  }
}

export default App;
