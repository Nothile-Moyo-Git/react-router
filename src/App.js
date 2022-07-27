import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import QuoteList from './components/quotes/QuoteList';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DUMMY_QUOTES } from './data/dummy_quotes';

import { useState } from 'react';

function App() {

  // Get our initial sessionStorage from dummy_quotes if we don't have one set
  sessionStorage.getItem('quotes') === null && sessionStorage.setItem('quotes', JSON.stringify(DUMMY_QUOTES));

  const [quotes, setQuotes] = useState(JSON.parse(sessionStorage.getItem('quotes')));
  const [quotesOrder, setQuotesOrder] = useState('Ascending');

  const onReverseOrder = () => {

  };

  return (
    <div className="App">
      <MainNavigation/>
      <Switch>

        <Route exact path="/quotes">
          <QuoteList quotes={quotes} reverseQuotes={onReverseOrder} quotesOrder={quotesOrder}/>
        </Route>

        <Route exact path="/">
          <Redirect to="/quotes"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
