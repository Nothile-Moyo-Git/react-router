import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import './QuoteForm.scss';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText});
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt 
        when={isEntering} 
        message={(location) => {
          return 'Are you sure you want to leave? All your entered data will be lost!';
          }}
        />
      <Card className="card card--container card--gap-top">
        <form onFocus={formFocusedHandler} className="quote-form" onSubmit={submitFormHandler}>
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
            <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
