import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.scss';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { commentsManager } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

const Comments = (props) => {

  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, data: loadedComments, status } = useHttp(commentsManager, true);

  // comment states
  const [isAddingComment, setIsAddingComment] = useState(false);

  // Start the add comment process by allowing the form to render
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // Added comment function which retrives the data
  const addedCommentHandler = useCallback((commentId) => {    
    sendRequest({method: 'fetch', quoteId: quoteId});
    setIsAddingComment(false);
  },[sendRequest, quoteId]);

  const updateCommentHandler = (commentId, quoteId) => {
    sendRequest({method: 'delete', quoteId: quoteId, commentId: commentId});
  };

  useEffect(() => {
    sendRequest({method: 'fetch', quoteId: quoteId});
  },[sendRequest, quoteId]);

  let comments;

  if (status === 'pending'){
    comments = (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    );
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList quoteId={quoteId} comments={loadedComments} updateComments={updateCommentHandler}/>;
  }

  if (status === 'completed' && (loadedComments && loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet!</p>;
  }

  return (
    <section className="comments">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && 
        <NewCommentForm 
          quoteId={params.quoteId} 
          onAddedComment={addedCommentHandler}
        />
      }
      { comments }
    </section>
  );
};

export default Comments;
