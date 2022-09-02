import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
import { useState } from 'react';

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">      
      <MainNavigation showForm={setShowForm}/>

      <Layout>
        <Switch>
          
          <Route exact path="/quotes">
            <AllQuotes showForm={showForm} setShowForm={setShowForm}/>
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail/>
          </Route>

          <Route exact path="/new-quote">
            <NewQuote/>
          </Route>

          <Redirect from="/" to="/quotes"/>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
