import { useRef } from 'react';
import './NewCommentForm.scss';
import { v4 as uuidv4 } from 'uuid';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here

    // send comment to server
    const newComment = {
      id: uuidv4(),
      text: event.target[0].value,
      quoteId: props.quoteId
    };

    props.setComments(previousComments => [...previousComments, newComment]);
    props.addComment(newComment);
    props.setIsAdding(false);
  };

  return (
    <form className="form form--layout" onSubmit={submitFormHandler}>
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
