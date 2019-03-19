// -IMPORTS- // 
  import React, { Component } from 'react';
  import './App.css';

    // HIGHER ORDER COMPONENT
    import HOC_withAuthenticate from './components/authentication/HOC_withAuthenticate'

    // COMPONENTS
    import PostsPage from './components/PostsContainer/PostsPage'

    // Data
    import dummyData from './components/dummy-data'

// -**-END-**-//
// -Start Code- //

const ComponentFromWithAuthenticate = HOC_withAuthenticate(PostsPage)
  console.log(ComponentFromWithAuthenticate)
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

            {/* <PostsPage posts={this.state.posts} /> */}
            <ComponentFromWithAuthenticate posts={this.state.posts}/>

          
      </div>
    );
  }
}

export default App;
