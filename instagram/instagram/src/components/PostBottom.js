import React, { Component } from 'react';

import CommentContainer from './CommentContainer'

import './components.css'

class PostBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        console.log('comment container CONSTRUCTOR invoked')
    }

    componentDidMount() {
        console.log('comment container CDM')
    }
    
    buttonHelper = e => {
        
    }

    render() {
        console.log('comment container RENDER invoked')
        return (
            <div className='container-postBottom'>
                <div className='postInteraction'>
                    <i 
                        className="far fa-heart false" 
                        onClick={this.onClickHelper}
                    ></i>
                    <i className="far fa-comment"></i>
                    <div className='likeCounter'>
                        <div>{this.props.likes} likes</div>
                    </div>
                </div>

                <CommentContainer 
                    comments={this.props.comments}
                />
            </div>
        );
    }
}

export default PostBottom
