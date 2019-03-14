import React from 'react'
import PropTypes from 'prop-types';

import Comment from './Comment'

import './components.css'

function PostContainer(props) {
    const { post }  = props;

        return (
            <div className='container-post'>
                <div className='container-postHeader'>
                    <div className='profile-IMG'>
                        <img src={post.thumbnailUrl} alt='img'/>
                    </div>
                    <div className='userName'>
                        {post.username}
                    </div>
                </div>
                <div className='postIMG'>
                    {/* <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjzptfpiYDhAhVRS6wKHVPGCdUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_82766200_stock-vector-winking-smiley-gesturing-with-his-hand-emoticon-thumbs-up-showing-positive-mood-.html&psig=AOvVaw15-JFPtjFK_3SsadC8Ufy8&ust=1552599451913638" alt="placeholderImg" /> */}

                    <img src={post.imageUrl} alt='img'/>
                </div>
                <div className='container-postBottom'>
                    <div className='postInteraction'>
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <div className='likeCounter'>
                            <div>{post.likes} likes</div>
                        </div>
                    </div>
                    <div className='container-comments'>
                        { post.comments.map( comment => (
                            <Comment comment={comment} />
                        ))}
                    </div>
                    <div className='addComment'>
                        <input type="text" name='addComment' placeholder='Add a comment...'/>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>

            </div>
        )
}

PostContainer.propTypes = {
    thumbnailUrl: PropTypes.number,
    imageUrl: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array
}

export default PostContainer 