
// -IMPORTS- // 
    import React, { Component } from 'react';

    // CSS
    import './login.css'
// -**-END-**-//
// -Start Code- //

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


class Login extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                userNameValue: '',
                userPasswordValue: '',
                userDatabase
            }
        }

        method_changeHandler_userName = e => {
            this.setState({ userNameValue: e.target.value})

            localStorage.setItem('userNameValue', e.target.value)

        }
        method_changeHandler_password = e => {
            this.setState({ userPasswordValue: e.target.value})

            localStorage.setItem('userPasswordValue', e.target.value)
        }

        method_logIn() {
            console.log('you clicked me!!')

            userDatabase.forEach( user => {
                this.state.userNameValue === user.db_userName ? alert('match') : alert('no match')
            })
            

            

            

            // userDatabase.forEach( user => {
            //     if (this.state.userNameValue === user.db_userName && this.state.userPasswordValue === user.db_password) {
            //             alert ('SUCCESSFUL LOGIN')
            //         } else {
            //             alert ('DUDE YOU SUCK A LOGGIN IN!!! LOL')
            //     }
            // })
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
                        onClick={this.method_logIn}
                    >
                        Enter
                    </button>
                </div>
            </div>
        )
    }
}


export default Login