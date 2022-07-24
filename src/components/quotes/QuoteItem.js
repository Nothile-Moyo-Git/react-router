import './QuoteItem.scss';

const QuoteItem = (props) => {
  return (
    <li className="item">
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
