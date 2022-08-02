import { useState } from 'react';

import './Comments.scss';
import NewCommentForm from './NewCommentForm';

import { DUMMY_COMMENTS } from '../../data/dummy_comments';
import CommentsList from './CommentsList';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const showCommentHandler = (event) => {
    event.preventDefault();
    setShowComments((previousState) => { return !previousState; })
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const comments = DUMMY_COMMENTS.filter(index => index.quoteId === props.quoteId);
  
  return (
    <section className="comments">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <button className="btn btn--flat" onClick={showCommentHandler}>Load comments</button>
      {showComments && <CommentsList comments={comments}/>}
    </section>
  );
};

export default Comments;
