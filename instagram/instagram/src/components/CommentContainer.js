import React, { Component } from 'react';

import Comment from './Comment'
import './components.css'


// !!!MAKE INTO STATEFUL COMPONENT
class CommentContainer extends Component {
    constructor(props) {
        // const { comments }  = props;
        super(props);
        this.state = {
            comments: this.props.comments,
            commentText: ''
        }
    }

    changeHandler = e => {
        this.setState({ commentText: e.target.value})
    }

    render() {
        return (
        <div className="commentContainer">
    
            {this.state.comments.map( comment => (
                <Comment comment={comment}/>
            ))}

            <div className='addComment'>
                <input 
                    type="text" 
                    name='addComment' 
                    placeholder='Add a comment...'

                    value={this.state.commentText}
                    onChange={this.changeHandler}
                />
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
        );
    }
}

export default CommentContainer
