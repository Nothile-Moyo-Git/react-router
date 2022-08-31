import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.scss';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';
import { deleteComment } from '../../lib/api';

const Comments = (props) => {

  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, data: loadedComments, status } = useHttp(getAllComments, true);
  const { sendRequest: deleteRequest, data: updatedComments, status: deleteStatus } = useHttp(deleteComment);

  // comment states
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [useOldComments, setUseOldComments] = useState(false);

  // Start the add comment process by allowing the form to render
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // Added comment function which retrives the data
  const addedCommentHandler = useCallback((commentId) => {    
    sendRequest(quoteId);
    setIsAddingComment(false);
    setUseOldComments(false);
  },[sendRequest, quoteId]);

  const updateCommentHandler = (commentId, quoteId) => {
    setUseOldComments(true);
    deleteRequest({commentId, quoteId});
  };

  useEffect(() => {
    sendRequest( quoteId );
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

  if (deleteStatus === 'completed' && useOldComments === true && updatedComments.length > 0){
    comments = <CommentsList quoteId={quoteId} comments={updatedComments} updateComments={updateCommentHandler}/>
  }

  if (deleteStatus === 'completed' && useOldComments === true && updatedComments.length === 0){
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
