import ReactDOM from 'react-dom'
import React from 'react';
import { Header, Logo } from './header'
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.css'
import { Banner, CounterContainer, store, ListFunction, Posts, Todo } from './main'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { POSTS } from './mock-data/post'



const BannerContent = props => <div>
    <h1>Travel Transformed</h1>
    {/* <img src={banner} /> */}
</div>

export const App = () => <div className="container">
    <Provider store={store}>
        <Logo />
        <Header />
        <Banner>
            <BannerContent />
        </Banner>
        <BrowserRouter>
            {/**Menu bar */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">CounterRedux</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/todoapp">TodoApp</Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path="/">
                    <ListFunction posts={POSTS} />
                </Route>
                <Route path="/counter">
                    <CounterContainer />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/todoapp">
                    <Todo />
                </Route>
            </Switch>
        </BrowserRouter>
        <Footer />
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'))