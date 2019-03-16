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
      posts: []
    }
  }
  componentDidMount() { // ONLY called ONCE --> SETUP
    console.log('CDM Invoked')
    
    // -W/out Timeout- //
      // this.setState({ posts: dummyData })

    // -W Timeout- //
      setTimeout( () => {
        this.setState({ posts: dummyData })
      }, 1000)
  }

  componentDidUpdate() {
    console.log('CDU Invoked')
    // WHAT IS THIS USED FOR AGAIN???
  }

  render() {
    console.log('Render Invoked')
    return (
      <div className="App">
          <SearchBar />

          {this.state.posts.length > 0 ? (
            this.state.posts.map( post => (
              <PostContainer post={post} />
            ))) : (
              <h2>page is currently loading!! CALM DOWN!!</h2>
            )}


          
      </div>
    );
  }
}

export default App;
