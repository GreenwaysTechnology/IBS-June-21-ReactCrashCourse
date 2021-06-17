import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.css'
import { Counter,Banner } from './main'

const BannerContent = props => <div>
    <h1>Travel Transformed</h1>
    {/* <img src={banner} /> */}
</div>

export const App = () => <div className="container">
    <Logo />
    <Header />
    <Banner>
        <BannerContent />
    </Banner>
    <Counter />

    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))