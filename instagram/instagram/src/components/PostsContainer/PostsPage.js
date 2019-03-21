// -IMPORTS- // 
    import React from 'react'


    // COMPONENTS
    import SearchBar from '../SearchBar/SearchBar'
    import PostContainer from './PostContainer'

    // CSS
    import '../components.css'
// -**-END-**-//
// -Start Code- //
function PostsPage(props) {

        return (
            <div className='PostsPage'>
                <SearchBar 
                    // Search Functionality
                        searchText={props.searchText}
                        filterSearchText={props.filterSearchText}
                />

                {console.log(props)}
                {console.log(props.posts)}
                {console.log(props.posts.length)}

                {/* // is there any data in posts array?? */}
                {props.posts.length > 0 ? (
                    // YES - map the posts array
                    props.posts.map( post => (
                        // is there anything in the search bar?
                        props.searchText !== '' ? (
                            // YES - only send matched user name
                            post.username === props.searchText ? (
                                <PostContainer post={post}/>
                            ) : null
                        ) : (
                            // NO - send ALL posts
                            <PostContainer post={post}/>
                        )
                    ))
                    ) : 
                    // NO - update the user that the page is loading
                    (
                        <h2>
                            page is currently loading!! CALM DOWN!!
                        </h2>
                    )
                }

            </div>
        )
}

export default PostsPage