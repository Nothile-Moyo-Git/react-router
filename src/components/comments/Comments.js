import { useState } from 'react';

import './Comments.scss';
import NewCommentForm from './NewCommentForm';

import { DUMMY_COMMENTS } from '../../data/dummy_comments';
import CommentsList from './CommentsList';

const Comments = (props) => {

  //session storage data for comments
  sessionStorage.getItem('comments') === null && sessionStorage.setItem('comments', JSON.stringify(DUMMY_COMMENTS.filter(index => index.quoteId === props.quoteId))); 

  const [isAddingComment, setIsAddingComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(DUMMY_COMMENTS.filter(index => index.quoteId === props.quoteId));

  const showCommentHandler = (event) => {
    event.preventDefault();
    setShowComments((previousState) => { return !previousState; })
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className="comments">

      <button className="btn btn--flat" onClick={showCommentHandler}>Load comments</button>

      {
        showComments && (
          <div>
            <h2>User Comments</h2>
            {!isAddingComment && (
              <button className='btn' onClick={startAddCommentHandler}>
                Add a Comment
              </button>
            )}
            {isAddingComment && <NewCommentForm setIsAdding={setIsAddingComment} setComments={setComments} quoteId={props.quoteId}/>}
            {comments.length > 0 ? <CommentsList comments={comments}/> : <b>No comments were added yet!</b>}
          </div>
        )
      }
    </section>
  );
};

export default Comments;
