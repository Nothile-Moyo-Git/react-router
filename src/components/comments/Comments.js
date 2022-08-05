import { useState, useEffect } from 'react';

import './Comments.scss';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = (props) => {

  const [isAddingComment, setIsAddingComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(props.comments);

  const showCommentHandler = (event) => {
    event.preventDefault();
    setShowComments((previousState) => { return !previousState; });
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

 
  useEffect(() => {
    props.updateComments(comments);
  },[comments,props]);
  
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
