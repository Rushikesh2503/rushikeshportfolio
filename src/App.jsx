import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import ContactM from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/contact">
          <ContactM/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
