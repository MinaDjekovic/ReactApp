
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Kalkulator from './components/Kalkulator';
import Kategorije from './components/Kategorije';

function App() {
  return (
    <BrowserRouter>


      <Switch>

        <Route path='/kategorije'>
          <Kategorije />
        </Route>
        <Route path='/kalkulator'>
          <Kalkulator />
        </Route>
        <Route path='/'>
          <Redirect to='/kalkulator' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
