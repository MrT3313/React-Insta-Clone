import React, { Component } from 'react';

import CommentContainer from '../Comments/CommentContainer'

import '../components.css'

class PostBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeStatus: false,
            likeCounter: this.props.likes
        }
        console.log('comment container CONSTRUCTOR invoked')
    }

    likeBtnTgl = e => {
        
        this.state.likeStatus === false ? (
            // CHANGING TO TRUE -- ADDING LIKE
            this.setState( prevState => {
                return {
                    likeStatus: !this.state.likeStatus,
                    likeCounter: prevState.likeCounter + 1
                }
            })
        ) : (
            // CHANGING TO false -- removing LIKE
            this.setState( prevState => {
                return {
                    likeStatus: !this.state.likeStatus,
                    likeCounter: prevState.likeCounter - 1
                }
            })
        )

        this.setState( prevState => {
            return {
                
            }
        })
        console.log(this.state.likeCounter)
    }

    render() {
        console.log('comment container RENDER invoked')
        return (
            <div className='container-postBottom'>
                <div className='postInteraction'>
                    <i
                        className={
                            this.state.likeStatus ? 'fas fa-heart': 'far fa-heart'
                        }
                        onClick={this.likeBtnTgl}
                    ></i>
                    <i className="far fa-comment"></i>
                    <div className='likeCounter'>
                        <div>{this.state.likeCounter} likes</div>
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
