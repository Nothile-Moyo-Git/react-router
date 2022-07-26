import './App.scss';
import MainNavigation from './components/layout/MainNavigation';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Switch>

        <Route exact path="/">
          <Redirect to="/quotes"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
