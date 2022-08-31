import './CommentItem.scss';

const CommentItem = (props) => {

  const deleteCommentHandler = () => {
    props.deleteComment(props.commentId, props.quoteId);
  }

  return (
    <li className="comment-item">
      <p>{props.text}</p>
      <button className="btn" onClick={deleteCommentHandler}>Delete</button>
    </li>
  );
};

export default CommentItem;
