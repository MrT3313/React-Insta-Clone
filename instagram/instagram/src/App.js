// -IMPORTS- // 
  import React, { Component } from 'react';
  import './App.css';

    // HIGHER ORDER COMPONENT
    import HOC_withAuthenticate from './components/authentication/HOC_withAuthenticate'

    // COMPONENTS
    import PostsPage from './components/PostsContainer/PostsPage'
    import Login from './components/LogIn/login'

    // Data
    import dummyData from './components/dummy-data'

// -**-END-**-//
// -Start Code- //

const ComponentFromWithAuthenticate = HOC_withAuthenticate(PostsPage)(Login)
  console.log(ComponentFromWithAuthenticate)
class App extends Component {
  constructor() {
    console.log('Constructor Invoked')
    super();
    this.state = {
      posts: [],
      searchText: ''
    }
  }
  componentDidMount() { // ONLY called ONCE --> SETUP
    console.log('CDM Invoked')
    
      setTimeout( () => {
        this.setState({ posts: dummyData })
      }, 1000)
  }

  filterSearchText = e => {
    console.log('search bar onChange function triggered')
      this.setState({ searchText: e.target.value})
  }

  render() {
    console.log('Render Invoked')
    return (
      <div className="App">

            <ComponentFromWithAuthenticate 
              // Posts
                posts={this.state.posts}
              // Search Functionality
                searchText={this.state.searchText}
                filterSearchText={this.filterSearchText}
            />

          
      </div>
    );
  }
}

export default App;
