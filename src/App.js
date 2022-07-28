import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import QuoteList from './components/quotes/QuoteList';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DUMMY_QUOTES } from './data/dummy_quotes';

import { useState } from 'react';

function App() {

  // Get our initial sessionStorage from dummy_quotes if we don't have one set
  sessionStorage.getItem('quotes') === null && sessionStorage.setItem('quotes', JSON.stringify(DUMMY_QUOTES));

  // Set our states for our quotes and ascending values which we will update between re-renders
  const [quotes, setQuotes] = useState(JSON.parse(sessionStorage.getItem('quotes')));
  const [quotesAscending, setQuotesAscending] = useState(true);

  // Reverse the order of our quotes and our ascending boolean
  const onReverseOrder = (event) => {

    event.preventDefault();

    setQuotes(( prevQuotes ) => { return prevQuotes.reverse(); });
    setQuotesAscending(( prevOrder ) => { return !prevOrder; });
  };

  let params = useParams();
  console.log(params);

  const getQuoteTextFromID = () => {

  };

  const getQuoteAuthorFromID = () => {

  };

  return (
    <div className="App">
      <MainNavigation/>
      <Switch>

        <Route exact path="/quotes">
          <QuoteList quotes={quotes} reverseQuotes={onReverseOrder} quotesAscending={quotesAscending}/>
        </Route>

        <Route exact path="/">
          <Redirect to="/quotes"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
