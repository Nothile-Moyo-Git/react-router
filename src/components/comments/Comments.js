import { useState, useEffect } from 'react';

import './Comments.scss';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = (props) => {

  // comment states
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(props.comments);

  // Show comment onclick button
  const showCommentHandler = (event) => {
    event.preventDefault();
    setShowComments((previousState) => { return !previousState; });
  }

  // Start the add comment process by allowing the form to render
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

 
  useEffect(() => {
    // Update the comments in the quote if we have comments and they have been updated
    typeof(comments) !== 'undefined' && props.updateComments(comments, props.quoteId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[comments]);
  
  return (
    <section className="comments">

      <button className="btn btn--flat" onClick={showCommentHandler}>Load comments</button>
  
      { props.quoteId && (
          showComments && (
            <div>
              <h2>User Comments</h2>
              {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                  Add a Comment
                </button>
              )}
              {isAddingComment && <NewCommentForm setIsAdding={setIsAddingComment} setComments={setComments} quoteId={props.quoteId}/>}
              {typeof(comments) !== 'undefined' ? <CommentsList comments={comments}/> : <b>No comments were added yet!</b>}
            </div>
          )
        )
      }
    </section>
  );
};

export default Comments;
