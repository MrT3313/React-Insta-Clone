
// -IMPORTS- // 
    import React, { Component } from 'react';

    // CSS
    import './login.css'
// -**-END-**-//



class Login extends React.Component {
    constructor(props) {
        super(props)
            this.state = {

            }
        }

    render () {
        return (
            <div className='login'>
                <div className='userName_input'>
                    <input 
                        type="text" 
                        name="input-userName"
                        placeholder="Enter UserName Here!"
                    />
                </div>
                <div className='PW_input'>
                    <input 
                        type='text'
                        name='input-PW'
                        placeholder='Enter Password Here!'
                    />
                </div>
                <div>
                    <button>Enter</button>
                </div>
            </div>
        )
    }
}


export default Login