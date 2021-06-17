import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.css'
import { List } from './main';
import { POSTS } from './mock-data/post'


export const App = () => <div className="container">
    <Logo />
    <Header />
    <List posts={POSTS} />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))