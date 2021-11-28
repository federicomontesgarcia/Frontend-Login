import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Registro from './components/Registro';
import Index from './components';

function App() {
  return (
    <Router>
      <Nav/>
      <Route path="/" exact component={Login}/>
      <Route path='/registrar' exact component={Registro}/>
      <Route path='/index' exact component={Index}/>
    </Router>
  );
}

export default App;


//<Route path='/' exact component={Login}/>
//<Route path='/registrar' exact component={Registro}/>

