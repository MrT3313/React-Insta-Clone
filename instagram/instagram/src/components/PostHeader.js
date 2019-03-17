import React from 'react'

import './components.css'

function PostHeader(props) {
    const { thumbnailUrl, username }  = props;

        return (
            <div className='container-postHeader'>
                <div className='profile-IMG'>
                    <img src={thumbnailUrl} alt='img'/>
                </div>
                <div className='userName'>
                    {username}
                </div>
            </div>
        )
}

export default PostHeader