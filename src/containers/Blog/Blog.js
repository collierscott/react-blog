import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
                            >Home</NavLink></li>
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
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;