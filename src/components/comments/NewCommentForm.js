import { useRef } from 'react';
import './NewCommentForm.scss';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, data, error, status } = useHttp(addComment, true);
  const [ isSending, setIsSending ] = useState(false);

  useEffect(() => {

    if (status === 'completed' && !error){
      props.onAddedComment(data);
      setIsSending(false);
    }
 
  },[status, data, error, props]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here

    setIsSending(true);
    sendRequest({commentData: {text: commentTextRef.current.value}, quoteId: props.quoteId});
  };

  return (
    <form className="form form--layout" onSubmit={submitFormHandler}>
      { (status === 'pending' && isSending) && <div className="centered"><LoadingSpinner/></div> }
      <div className="form form--layout" onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className="actions">
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
