import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import axios from 'axios';
//import axios from '../../axios';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        let authorized = this.state.auth;

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                            exact
                            activeClassName="active"
                            activeStyle={{
                                textDecoration: 'underline'
                            }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {authorized ? <Route path="/admin" component={AsyncNewPost} /> : null}
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Posts} />
                    <Route render={() => <h1>Page not found</h1>} />
                    {/* <Redirect from="/" to="/posts"/> */}
                    {/* <Route path="/post/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;