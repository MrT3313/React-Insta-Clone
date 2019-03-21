

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../LogIn/login';

const userDatabase = [
    {
        db_userName: 'billyBobTheTROLL',
        db_password: 'ABc13'
    },
    {
        db_userName: 'person2',
        db_password: 'zZzaAa'
    }
]

// HOC = function that returns a class component
const HOC_withAuthenticate = FunctionArg_PostComponent => FunctionArg_loginComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props)
                this.state = {
                    loggedIn: true
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
                    {
                        this.state.loggedIn === false ? <Login /> : 
                            <FunctionArg_PostComponent 
                                // Posts
                                    posts={this.props.posts}
                                // Search Functionality
                                    searchText={this.props.searchText}
                                    filterSearchText={this.props.filterSearchText}
                            />  
                    }
                </div>
            )
        }
    }
}

HOC_withAuthenticate.propTypes = {
    posts: PropTypes.array,
    searchText: PropTypes.string
}

export default HOC_withAuthenticate