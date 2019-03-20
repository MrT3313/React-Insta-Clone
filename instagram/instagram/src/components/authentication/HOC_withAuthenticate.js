

import React, { Component } from 'react';
import PropTypes from 'prop-types';



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

        render () {
            return (
                <div className='HOCclass'>
                    <FunctionArg_PostComponent posts={this.props.posts}/>
                </div>
            )
        }
    }
}

export default HOC_withAuthenticate