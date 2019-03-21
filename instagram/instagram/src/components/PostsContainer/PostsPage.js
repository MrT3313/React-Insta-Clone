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

                {props.posts.length > 0 ? (
                    props.posts.map( post => (
                        
                        props.searchText !== '' ? (
                            post.username === props.searchText ? (
                                <PostContainer post={post}/>
                            ) : null
                        ) : (
                            <PostContainer post={post}/>
                        )

 

                        
                    ))) : (
                        <h2>page is currently loading!! CALM DOWN!!</h2>
                    )}

            </div>
        )
}

export default PostsPage