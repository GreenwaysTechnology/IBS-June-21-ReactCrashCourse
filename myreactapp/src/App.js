import React from 'react';
// import { Header } from './header/header'
// import { Logo } from './header/logo'
import { Header, Logo } from './header' //this internally refere index.js file
// import { Footer } from './footer/footer';
import { Footer } from './footer';
import { Main } from './main'

// import { Main } from './main/main'


export const App = () => <div className="container">
    <Logo />
    <Header />
    <Main />
    <Footer />
</div>