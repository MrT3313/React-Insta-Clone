
// -IMPORTS- // 
    import React, { Component } from 'react';

    // CSS
    import styled from 'styled-components'
// -**-END-**-//
// -Start Code- //

// - Styled Components - //

const Section = styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 300px;
`;

const Button = styled.button`
    font-size: 20px;
    width: 75px;
`;

const Input = styled.input`
    text-align: center;    
    height: 25px;
    width: 200px;
    border: 1px dashed black;
    margin-bottom: 15px;
    

`;
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
            <Section className='login'>
                <div className='userName_input'>
                    <Input 
                        type="text" 
                        name="input-userName"
                        placeholder="Enter UserName Here!"

                        onChange={this.method_changeHandler_userName}
                    />
                </div>
                <div className='PW_input'>
                    <Input 
                        type='password'
                        name='input-PW'
                        placeholder='Enter Password Here!'

                        onChange={this.method_changeHandler_password}
                    />
                </div>
                <div>
                    <Button
                        onClick={this.checkLogin}
                    >
                        Enter
                    </Button>
                </div>
            </Section>
        )
    }
}


export default Login