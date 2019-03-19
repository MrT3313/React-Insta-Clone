

import React, { Component } from 'react';
import PropTypes from 'prop-types';



// HOC = function that returns a class component
const HOC_withAuthenticate = FunctionArgument => {
    return class extends React.Component {
        // constructor(props) {
        //     super(props)
        //         this.state = {

        //         }
        //     }

        render () {
            return (
                <div className='HOCclass'>
                    <FunctionArgument posts={this.props.posts}/>
                </div>
            )
        }
    }
}

export default HOC_withAuthenticate