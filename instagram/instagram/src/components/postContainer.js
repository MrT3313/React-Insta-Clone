import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentContainer from './CommentContainer'

import './components.css'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('post container CONSTRUCTOR invoked')
    }

    render() {
        console.log('post container RENDER invoked')
        return (
            <div className='container-post'>
                <div className='container-postHeader'>
                    <div className='profile-IMG'>
                        {/* <img src={post.thumbnailUrl} alt='img'/> */}
                    </div>
                    <div className='userName'>
                        {this.props.post.username}
                    </div>
                </div>
                <div className='postIMG'>
                    <img src={this.props.post.imageUrl} alt='img'/>
                </div>
                <div className='container-postBottom'>
                    <div className='postInteraction'>
                        <i className="far fa-heart"></i>
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