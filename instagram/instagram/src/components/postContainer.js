import React from 'react'

import './components.css'

function PostContainer(props) {
    const { post }  = props;

        return (
            <div className='container-post'>
                <div className='container-header'>
                    <div className='profile-IMG'>
                        <img src={post.thumbnailUrl} />
                    </div>
                    <div className='userName'>
                        {post.username}
                    </div>
                </div>
            </div>
        )
}

export default PostContainer 