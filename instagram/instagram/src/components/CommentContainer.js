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
        console.log('comment container CONSTRUCTOR invoked')
    }

    componentDidMount() {
        console.log('comment container CDM')
    }
    
    buttonHelper = e => {
        if (this.state.commentText !== '') {
            const newComment = {
                text: this.state.commentText,
                username: 'billyBobTheTROLL'
            }
        
            this.setState(prevState => ({
                comments: [newComment, ...prevState.comments],
                commentText: ''
            }))
        }
        
    }
        // submitComment = () => {
        //     this.setState( {comments: }
        // }

    changeHandler = e => {
        this.setState({ commentText: e.target.value})
    }

    render() {
        console.log('comment container RENDER invoked')
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
                <button 
                    onClick={this.buttonHelper}
                >
                    <i className="fas fa-ellipsis-h"></i>
                </button>
                
            </div>
        </div>
        );
    }
}

export default CommentContainer
