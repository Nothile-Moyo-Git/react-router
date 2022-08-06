import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import './QuoteForm.scss';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText, id:uuidv4(), comments: []});
  }

  return (
    <Card className="card card--container card--gap-top">
      <form className="quote-form" onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className="loading">
            <LoadingSpinner />
          </div>
        )}

        <div className="control">
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className="control">
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className="actions">
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
