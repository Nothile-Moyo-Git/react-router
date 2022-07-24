import './HighlightedQuote.scss';

const HighlightedQuote = (props) => {
  return (
    <figure className="quote">
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
