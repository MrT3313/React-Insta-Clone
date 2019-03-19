import React, { Component } from 'react';
import './App.css';

import dummyData from './components/dummy-data'

import PostsPage from './components/PostsContainer/PostsPage'

class App extends Component {
  constructor() {
    console.log('Constructor Invoked')
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() { // ONLY called ONCE --> SETUP
    console.log('CDM Invoked')
    
      setTimeout( () => {
        this.setState({ posts: dummyData })
      }, 1000)
  }

  render() {
    console.log('Render Invoked')
    return (
      <div className="App">

            <PostsPage posts={this.state.posts} />


          
      </div>
    );
  }
}

export default App;
