
// -IMPORTS- // 
    import React, { Component } from 'react';

    // CSS
    import './login.css'
// -**-END-**-//
// -Start Code- //
class Login extends React.Component {

    method_changeHandler_userName = e => {
        localStorage.setItem('userNameValue', e.target.value)

    }
    method_changeHandler_password = e => {
        localStorage.setItem('userPasswordValue', e.target.value)
    }

    checkLogin = e => {
        let loginResult = false
        console.log(loginResult)

        this.props.userDatabase.map( user => {
            if (
                localStorage.getItem('userNameValue') === user.db_userName &&
                localStorage.getItem('userPasswordValue') === user.db_password
            ) {
                loginResult = true
            }
            console.log(loginResult)
        })

        if (loginResult !== false) {
            this.props.toggle_loggedIn()
        } else {
            alert("FAILED LOGIN")
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
                    <button
                        onClick={this.checkLogin}
                    >
                        Enter
                    </button>
                </div>
            </div>
        )
    }
}


export default Login