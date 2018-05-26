import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
//import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
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
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push("/" + id);
    };

    render() {
        let posts = <p> </p>;

        if(this.state.error) {
            posts = <p style={{textAlign: 'center'}}>Error!</p>;
        } else {
            posts = this.state.posts.map(
                post => {
                    return (
                        //<Link to={"/post/" + post.id} key={post.id}>
                            <Post
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                summary={post.summary}
                                body={post.body}
                                clicked={() => this.postSelectedHandler(post.id)}
                            />
                        //</Link>
                    )
                }
            );
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <Route path={this.props.match.url + ":id"} exact component={FullPost} />
                </section>
            </div>
        )
    }
}

export default Posts;