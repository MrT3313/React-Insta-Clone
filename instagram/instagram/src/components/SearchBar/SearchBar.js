import React from 'react'

import '../components.css'

function SearchBar(props) {

        return (
            <div className='container-searchBar'>
                <div className='searchBar-left'>
                    <div className='instagramLogo'>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className='instagramName'>
                        <h2>Instagram</h2>
                    </div>
                </div>
                <form className='searchBar-center'>
                    <input type="text" name='searchBar' placeholder='Search'/>
                </form>
                <div className='searchBar-right'>
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
}

export default SearchBar 