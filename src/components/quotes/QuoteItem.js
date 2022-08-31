import './QuoteItem.scss';
import { Link } from 'react-router-dom';

const QuoteItem = (props) => {

  const deleteQuoteHandler = () => {
    props.deleteQuote(props.id);
  };

  return (
    <li className="item">
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className="btn">View Fullscreen</Link>
      <button className='item__delete' onClick={deleteQuoteHandler}>x</button>
    </li>
  );
};

export default QuoteItem;
