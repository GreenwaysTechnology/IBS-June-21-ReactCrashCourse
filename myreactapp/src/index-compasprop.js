import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.css'
import { List, Banner } from './main';
import { POSTS } from './mock-data/post'
import banner from './banner.jpg'

const BannerContent = props => <div>
    <h1>Travel Transformed</h1>
    <img src={banner} />
</div>

export const App = () => <div className="container">
    <Logo />
    <Header />
    <Banner>
        <BannerContent />
    </Banner>
    <List posts={POSTS} />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))