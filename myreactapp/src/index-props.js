import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.css'
import { Customer } from './main'


const id = 100
const firstName = "Subramanian"
const lastName = "Murugan"
const status = true
const address = {
    city: 'Coimbatore',
    state: 'TN'
}

export const App = () => <div className="container">
    <Logo />
    <Header />
    <Customer id={id} lastName={lastName} firstName={firstName} status={status} address={address} />
    <Customer id={200} lastName={"Subramanian"} firstName={"Dhivya Sree"} status={status} address={address} />

    {/**No props are passed */}
    <Customer />

    {/* <Customer id={"abc"} /> */}
    <Customer id={5666} />


    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
