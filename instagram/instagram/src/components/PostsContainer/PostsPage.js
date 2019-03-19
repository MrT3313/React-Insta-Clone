// -IMPORTS- // 
    import React from 'react'

    // HIGHER ORDER COMPONENT
    import HOC_withAuthenticate from '../authentication/HOC_withAuthenticate'

    // COMPONENTS
    import SearchBar from '../SearchBar/SearchBar'
    import PostContainer from './PostContainer'

    // CSS
    import '../components.css'
// -**-END-**-//
// -Start Code- //
function PostsPage(props) {

    const HOC = HOC_withAuthenticate()
    console.log(HOC)

        return (
            <div className='PostsPage'>
                <SearchBar />

                {console.log(props)}
                {console.log(props.posts)}
                {console.log(props.posts.length)}


                {/* your going to call your HOC in here?? */}
                <HOC />

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