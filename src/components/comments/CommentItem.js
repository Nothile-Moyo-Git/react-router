import 'CommentItem.scss';

const CommentItem = (props) => {
  return (
    <li className="item">
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
