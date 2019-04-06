// -IMPORTS- // 
    import React from 'react'

    // CSS
    import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .instagramName {
        padding-left: 15px;
    }
    .instagramLogo {
        padding: 0px 15px;
        border-right: 1px solid black;
    }
    .fab {
        font-size: 30px;
    }
    .far {
        font-size: 20px;
        padding-right: 15px;
    }
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        background: rgb(230, 229, 229);
        height: 20px;
        text-align: center;
    }
`;

function SearchBar(props) {
        return (
            <Section className='container-searchBar'>
                <div className='searchBar-left'>
                    <div className='instagramLogo'>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className='instagramName'>
                        <h2>Instagram</h2>
                    </div>
                </div>
                <Form className='searchBar-center'>
                    <input 
                        type="text" 
                        name='searchBar' 
                        placeholder='Search'

                        onChange={props.filterSearchText}
                    />
                </Form>
                <div className='searchBar-right'>
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </Section>
        )
}

export default SearchBar 