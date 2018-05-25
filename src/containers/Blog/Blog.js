import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,3);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Scott',
                        summary: post.body.substr(0, 200)
                    }
                });

                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                // Errors here are like no internet connection and stuff
                console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render () {
        let posts = <p> </p>;

        if(this.state.error) {
            posts = <p style={{textAlign: 'center'}}>Error!</p>;
        } else {
            posts = this.state.posts.map(
                post => {
                    return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        summary={post.summary}
                        body={post.body}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                }
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;