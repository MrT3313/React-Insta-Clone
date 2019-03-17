import React, { Component } from 'react';

import CommentContainer from './CommentContainer'

import './components.css'

class PostBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeStatus: false
        }
        console.log('comment container CONSTRUCTOR invoked')
    }

    likeBtnTgl = e => {
        this.setState( { likeStatus: !this.state.likeStatus} )
    }

    render() {
        console.log('comment container RENDER invoked')
        return (
            <div className='container-postBottom'>
                <div className='postInteraction'>
                    <i
                        className={
                            this.state.likeStatus ? 'fas fa-heart': 'far fa-heart'
                        }
                        onClick={this.likeBtnTgl}
                    ></i>
                    <i className="far fa-comment"></i>
                    <div className='likeCounter'>
                        <div>{this.props.likes} likes</div>
                    </div>
                </div>

                <CommentContainer 
                    comments={this.props.comments}
                />
            </div>
        );
    }
}

export default PostBottom
