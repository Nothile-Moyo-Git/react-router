import './QuoteItem.scss';
import { Link } from 'react-router-dom';

const QuoteItem = (props) => {
  return (
    <li className="item">
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/react-router/quotes/${props.id}`} className="btn" onClick={() => {props.getQuote(props.id)}}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
