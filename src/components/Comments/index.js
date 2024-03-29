import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    Description: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(comment => comment.id !== id),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, Description} = this.state
    const initialContainerBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment: Description,
      isLiked: false,
      createdAt: new Date(),
      initialClassName: initialContainerBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      Description: '',
    }))
  }

  onChangeDescription = event => {
    this.setState({Description: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, Description, commentList} = this.state
    const commentCount = commentList.length

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">COMMENTS</h1>
          <p className="para">Say something about 4.o Technologies</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="image"
          />
          <form className="comment-form-container" onSubmit={this.onAddComment}>
            <input
              type="text"
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Your Name"
            />
            <textarea
              className="input"
              value={Description}
              onChange={this.onChangeDescription}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <p>{commentCount} comments</p>
          {commentCount > 0 && (
            <ul className="comments-list">
              {commentList.map(comment => (
                <CommentItem
                  key={comment.id}
                  commentDetails={comment}
                  toggleLike={this.toggleIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Comments
