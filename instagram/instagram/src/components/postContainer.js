import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentContainer from './CommentContainer'
import PostHeader from './PostHeader'

import './components.css'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
        console.log('post container CONSTRUCTOR invoked')
    }

    onClickHelper = e => {
        // GET BUTTON ELEMENT
        const heartBtn = document.getElementsByClassName('fa-heart')
        console.log(heartBtn)
        
        if (this.state.liked !== false) {

        }
    }

    onDoubleClickHelper = e => {

    }

    render() {
        console.log('post container RENDER invoked')
        return (
            <div className='container-post'>
                <PostHeader 
                    thumbnailUrl={this.props.post.thumbnailUrl}
                    username={this.props.post.username}
                />



                <div className='postIMG'>
                    <img src={this.props.post.imageUrl} alt='img'/>
                </div>
                <div className='container-postBottom'>
                    <div className='postInteraction'>
                        <i 
                            className="far fa-heart false" 
                            onClick={this.onClickHelper}
                            // onDoubleClick={this.onDoubleClickHelper}
                        ></i>
                        <i className="far fa-comment"></i>
                        <div className='likeCounter'>
                            <div>{this.props.post.likes} likes</div>
                        </div>
                    </div>
                    <CommentContainer comments={this.props.post.comments}/>
                </div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.array,
    // post.thumbnailUrl: PropTypes.number,
    imageUrl: PropTypes.string,

    username: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array
}

export default PostContainer 