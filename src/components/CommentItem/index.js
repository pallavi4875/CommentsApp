// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {CommentDetails, toggleLike, deleteComment} = props
  const {name, Description, id, isLiked, createdAt} = CommentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeIcon = () => {
    toggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="card">
      <h1 className="title">{name}</h1>
      <p className="para">{Description}</p>
      <p className="time-ago">{formatDistanceToNow(new Date(createdAt))} ago</p>
      <div className="icon-container">
        <button
          type="button"
          className="Like-container"
          onClick={onClickLikeIcon}
        >
          <img src={likeImgUrl} className="like-icon" alt="like" />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
