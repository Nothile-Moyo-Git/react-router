import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import QuoteList from './components/quotes/QuoteList';
import HighlightedQuote from './components/quotes/HighlightedQuote';
import Comments from './components/comments/Comments';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DUMMY_QUOTES } from './data/dummy_quotes';

import { useState } from 'react';
import NoQuotesFound from './components/quotes/NoQuotesFound';

function App() {

  // Get our initial sessionStorage from dummy_quotes if we don't have one set
  sessionStorage.getItem('quotes') === null && sessionStorage.setItem('quotes', JSON.stringify(DUMMY_QUOTES));
  
  // Set our states for our quotes and ascending values which we will update between re-renders
  const [quotes, setQuotes] = useState(JSON.parse(sessionStorage.getItem('quotes')));
  const [currentQuote, setCurrentQuote] = useState({text: '', author: ''});
  const [quotesAscending, setQuotesAscending] = useState(true);

  // Reverse the order of our quotes and our ascending boolean
  const onReverseOrder = (event) => {

    event.preventDefault();

    setQuotes(( prevQuotes ) => { return prevQuotes.reverse(); });
    setQuotesAscending(( prevOrder ) => { return !prevOrder; });
  };

  const setQuote = (quote) => {
    setCurrentQuote(quote);
  };

  const addComment = (comment) => {

  };

  return (
    <div className="App">
      <MainNavigation/>
      <Switch>

        <Route path="/quotes/:quoteID">
          <HighlightedQuote text={currentQuote.text} author={currentQuote.author}/>
          <Comments quoteId={ currentQuote.id } comments={currentQuote.comments} addComment={addComment}/>
        </Route>

        <Route exact path="/quotes">
          { quotes.length > 0 ? 
            <QuoteList quotes={quotes} reverseQuotes={onReverseOrder} quotesAscending={quotesAscending} setQuote={setQuote}/> :
            <NoQuotesFound/>
          }
        </Route>

        <Route exact path="/">
          <Redirect to="/quotes"/>
        </Route>

        <Route exact path="/react-router">
          <Redirect to="/quotes"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
