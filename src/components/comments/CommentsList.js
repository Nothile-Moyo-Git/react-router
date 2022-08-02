import CommentItem from './CommentItem';
import './CommentsList.scss';

const CommentsList = (props) => {
  return (
    <ul className="comments comments--list">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
