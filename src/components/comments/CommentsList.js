import CommentItem from './CommentItem';
import './CommentsList.scss';

const CommentsList = (props) => {

  const deleteCommentHandler = (commentId, quoteId) => {
    props.updateComments(commentId, quoteId);
  }

  return (
    <ul className="comments comments--list">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} commentId={comment.id} quoteId={props.quoteId} deleteComment={deleteCommentHandler}/>
      ))}
    </ul>
  );
};

export default CommentsList;
