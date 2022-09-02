import QuoteItem from './QuoteItem';
import './QuoteList.scss';
import '../layout/Layout.scss';
import { useLocation, useHistory } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {

    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  const deleteQuoteHandler = (quoteId) => {
    props.updateQuotes(quoteId);
  };

  const editQuoteHandler = (quoteId, quoteText, author) => {
    props.editQuote(quoteId, quoteText, author);
  };

  return (
    <section className="main">
      <div className="sorting">
        <button onClick={changeSortingHandler}>{`Sort ${isSortingAscending ? 'Descending' : 'Ascending'}`}</button>
      </div>
      <ul className="list">
        { sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            deleteQuote={deleteQuoteHandler}
            editQuote={editQuoteHandler}
            showForm={props.showForm}
            setShowForm={props.setShowForm}
          />
        ))}
      </ul>
    </section>
  );
};

export default QuoteList;
