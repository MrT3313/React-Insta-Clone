import React from 'react'

import './components.css'

function Comment(props) {
    const { comment }  = props;

        return (
            <div className='commentContent'>
                <div className='commentUser'>
                    {comment.username}
                </div>
                <div className='commentText'>
                    {comment.text}
                </div>
            </div>
        )
}

export default Comment 