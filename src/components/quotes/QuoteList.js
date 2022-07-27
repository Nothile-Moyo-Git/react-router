import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import './QuoteList.scss';
import '../layout/Layout.scss';

const QuoteList = (props) => {



  return (
    <section className="main">
      <div className="sorting">
        <button onClick={props.reverseQuotes}>Sort Ascending</button>
      </div>
      <ul className="list">
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </section>
  );
};

export default QuoteList;
