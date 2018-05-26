import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
//import axios from 'axios';
//import axios from '../../axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
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
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Route path="/" exact render={ () => <h1>Home</h1> */}
                
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} />
                    {/* <Route path="/post/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;