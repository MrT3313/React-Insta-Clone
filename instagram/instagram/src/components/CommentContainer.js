import React, { Component } from 'react';

import './components.css'


// !!!MAKE INTO STATEFUL COMPONENT
class CommentContainer extends Component {
    constructor() {
        // const { comments }  = props;
        super();
        this.state = {
            comments: []
        }
    }

    

    render() {

        return (
        <div className="commentContainer">
    
            {/* { this.state.posts.map( post => (
                <PostContainer post={post} />
            ))} */}
            <div className='addComment'>
                <input type="text" name='addComment' placeholder='Add a comment...'/>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
        );
    }
}

export default CommentContainer
