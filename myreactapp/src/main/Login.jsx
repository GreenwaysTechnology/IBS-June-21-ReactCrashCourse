import React from 'react'

export const UserGreeting = props => <h1>
    Welcome to {props.userName}
</h1>

export const GuestGreeting = props => <h1>
    Welcome to {props.userName}
</h1>

export const Login = props => {
    const userName = props.user.name;
    const password = props.user.password;
    //logic if user name is admin and password is admin
    if (userName === 'admin' && password === 'admin') {
        return <UserGreeting userName={userName} />
    }
    return <GuestGreeting userName={"Guest"} />


}