
// -IMPORTS- // 
    import React, { Component } from 'react';

    // CSS
    import './login.css'
// -**-END-**-//
// -Start Code- //
class Login extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                userNameValue: '',
                userPasswordValue: ''
            }
        }

        method_changeHandler_userName = e => {
            // this.setState({ userNameValue: e.target.value})
            localStorage.setItem('userNameValue', e.target.value)

        }
        method_changeHandler_password = e => {
            // this.setState({ userPasswordValue: e.target.value})
            localStorage.setItem('userPasswordValue', e.target.value)
        }

    render () {
        return (
            <div className='login'>
                <div className='userName_input'>
                    <input 
                        type="text" 
                        name="input-userName"
                        placeholder="Enter UserName Here!"

                        onChange={this.method_changeHandler_userName}
                    />
                </div>
                <div className='PW_input'>
                    <input 
                        type='text'
                        name='input-PW'
                        placeholder='Enter Password Here!'

                        onChange={this.method_changeHandler_password}
                    />
                </div>
                <div>
                    <button>
                        Enter
                    </button>
                </div>
            </div>
        )
    }
}


export default Login