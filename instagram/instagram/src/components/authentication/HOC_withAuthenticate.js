

import React, { Component } from 'react';
import PropTypes from 'prop-types';



// HOC = function that returns a class component
const HOC_withAuthenticate = () => {
    return class extends React.Component {
        render () {
            return <h2>HOC</h2>
        }
    }
}

export default HOC_withAuthenticate