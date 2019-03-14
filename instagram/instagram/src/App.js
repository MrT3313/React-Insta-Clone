import React, { Component } from 'react';
import './App.css';

import dummyData from './components/dummy-data'

import PostContainer from './components/PostContainer'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor() {
    console.log('Constructor Invoked')
    super();
    this.state = {
      // posts: dummyData
      posts: []
    }
  }
  componentDidMount() {
    console.log('CDM Invoked')
    this.setState({ posts: dummyData })
  }
  render() {
    console.log('Render Invoked')
    return (
      <div className="App">
          <SearchBar />

          { this.state.posts.map( post => (
            <PostContainer post={post} />
          ))}
      </div>
    );
  }
}

export default App;
