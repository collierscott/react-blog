import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null,
        error: false
    };

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        // id is a string, so need to convert to a number
        let id = this.props.match.params.id;

        if (id) {
            if(!this.state.post || (this.state.post && this.state.post.id !== +id)) {
                axios.get('/posts/' + id)
                    .then(response => {
                        this.setState({post: response.data});
                    }).catch( error => {
                        this.setState({error: true});
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Loading...</p>;

        if(this.state.error) {
            post = <p style={{textAlign: 'center'}}>The post was not found.</p>;
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