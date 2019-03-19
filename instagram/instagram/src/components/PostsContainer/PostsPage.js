import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

import '../components.css'

function PostsPage(props) {
    const { thumbnailUrl, username }  = props;

        return (
            <div className='PostsPage'>
                <h2>inside postPage</h2>
                <SearchBar />

                {console.log(props)}
                {console.log(props.posts)}
                {console.log(props.posts.length)}

                {props.posts.length > 0 ? (
                    props.posts.map( post => (
                        <PostContainer post={post}/>
                    ))) : (
                        <h2>page is currently loading!! CALM DOWN!!</h2>
                    )}

            </div>
        )
}

export default PostsPage