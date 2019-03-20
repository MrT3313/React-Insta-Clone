

import React, { Component } from 'react';
import Login from '../LogIn/login';



// HOC = function that returns a class component
const HOC_withAuthenticate = FunctionArg_PostComponent => FunctionArg_loginComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props)
                this.state = {
                    loggedIn: false
                }
            }

        componentDidMount() {
            if (this.state.loggedIn !== true) {

            } else {

            }
        }

        toggle_loggedIn = () => {
            this.setState( prevState => {
                return {loggedIn: !prevState.loggedIn}
            })
        }

        render () {
            return (
                <div className='HOCclass'>

                    {this.state.loggedIn === false ? <Login /> : <FunctionArg_PostComponent posts={this.props.posts}/>  }
                        
                    

                    
                </div>
            )
        }
    }
}

export default HOC_withAuthenticate