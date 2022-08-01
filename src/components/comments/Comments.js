import { useState } from 'react';

import './Comments.scss';
import NewCommentForm from './NewCommentForm';

import { DUMMY_COMMENTS } from '../../data/dummy_comments';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className="comments">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
      <CommentsList comments={DUMMY_COMMENTS}/>
    </section>
  );
};

export default Comments;
