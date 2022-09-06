import React, { useState, Suspense } from 'react';
import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => { return import('./components/pages/NewQuote'); });
const QuoteDetail = React.lazy(() => { return import('./components/pages/QuoteDetail'); });
const NotFound = React.lazy(() => { return import('./components/pages/NotFound'); });
const AllQuotes = React.lazy(() => { return import('./components/pages/AllQuotes'); });

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">      
      <MainNavigation showForm={setShowForm}/>

      <Layout>

        <Suspense
          fallback={
            <div className='centered'>
              <LoadingSpinner/>
            </div>
          }
        >

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

        </Suspense>

      </Layout>
    </div>
  );
}

export default App;
