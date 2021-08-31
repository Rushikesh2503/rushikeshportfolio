import { Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import ContactM from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <Contact/>
        </Route>
        <Route exact path="/projects">
          <Contact/>
        </Route>
        <Route exact path="/contact">
          <ContactM/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
