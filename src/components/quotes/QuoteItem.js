import './QuoteItem.scss';
import { Link, Prompt } from 'react-router-dom';
import { useRef, useState } from 'react';

const QuoteItem = (props) => {

  const inputRef = useRef();
  const [showEditForm, setShowEditForm] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const deleteQuoteHandler = () => {
    props.deleteQuote(props.id);
  };

  const toggleEditQuote = () => {
    setShowEditForm(true);
    props.setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowEditForm(false);
    setIsEntering(false);
    props.setShowForm(false);
  }

  const editQuoteHandler = (event) => {
    event.preventDefault();
    props.editQuote(props.id, inputRef.current.value, props.author);
    submitFocusHandler();
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const submitFocusHandler = () => {
    setIsEntering(false);
  }

  return (
    <li>
      <Prompt 
        when={isEntering ===  true} 
        message={(location) => {
          return 'Are you sure you want to leave? All your entered data will be lost!';
          }}
      />
      { (showEditForm === true && props.showForm === true) &&
        <form onSubmit={editQuoteHandler} className="item item--form" onFocus={formFocusedHandler}>
          <textarea
            rows={5}
            defaultValue={props.text}
            ref={inputRef}
          />
          <div className='item__buttons item__buttons--horizontal'>
            <button className="btn">Submit</button>
            <button className="btn" onClick={hideFormHandler}>Cancel</button>
          </div>
        </form>
      } 

      { ( showEditForm === false || props.showForm === false) &&
        <div className="item">
          
          <figure>
            <blockquote>
              <p>{props.text}</p>
            </blockquote>
            <figcaption>{props.author}</figcaption>
          </figure>

          <div className="item__buttons">
            <button className="btn" onClick={toggleEditQuote}>Edit</button>
            <Link to={`/quotes/${props.id}`} className="btn">View Fullscreen</Link>
          </div>

          <button className='item__delete' onClick={deleteQuoteHandler}>x</button>
          
        </div>
      }
    </li>
  );
};

export default QuoteItem;
