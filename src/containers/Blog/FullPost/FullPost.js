import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    };
    componentDidMount () {
        let id = this.props.match.params.id;
        if (id) {
            if(!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
                axios.get('/posts/' + id)
                    .then(response => {
                        this.setState({post: response.data});
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>The post was not found.</p>;

        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if(this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;