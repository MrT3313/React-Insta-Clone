import React, { Component } from 'react';
import PropTypes from 'prop-types';


import PostHeader from './PostHeader'
import PostBottom from './PostBottom'

import '../components.css'

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

    render() {
        console.log('post container RENDER invoked')
        return (
            <div className='container-post'>

                {console.log(this.props.post.thumbnailUrl)}
                {console.log(this.props.post.username)}

                <PostHeader 
                    thumbnailUrl={this.props.post.thumbnailUrl}
                    username={this.props.post.username}
                />
                <div className='postIMG'>
                    <img src={this.props.post.imageUrl} alt='img'/>
                </div>
                <PostBottom 
                    likes={this.props.post.likes}
                    comments={this.props.post.comments}
                />
            </div>

            // <div className='container-post'>
            //     <PostHeader 
            //         thumbnailUrl={this.props.post.thumbnailUrl}
            //         username={this.props.post.username}
            //     />

                // <div className='postIMG'>
                //     <img src={this.props.post.imageUrl} alt='img'/>
                // </div>

                // <PostBottom 
                //     likes={this.props.post.likes}
                //     comments={this.props.post.comments}
                // /> 
            // </div>

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