import QuoteItem from './QuoteItem';
import './QuoteList.scss';
import '../layout/Layout.scss';

const QuoteList = (props) => {

  const getQuoteFromID = (id) => {
    // Find the current quote to pass it back up so we can pass it through to Highlighted Quote
    const quote = props.quotes.find(index => index.id === id);
    props.setQuote(quote);
  };

  return (
    <section className="main">
      <div className="sorting">
        <button onClick={props.reverseQuotes}>Sort { props.quotesAscending === true ? 'Ascending' : 'Descending' }</button>
      </div>
      <ul className="list">
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            getQuote={getQuoteFromID}
          />
        ))}
      </ul>
    </section>
  );
};

export default QuoteList;
