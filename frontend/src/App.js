import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import './Components/style.css'
import Join from './Components/Join'
import Chat from './Components/Chat'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component
{
  render()
  {
    return <Router>
    	<Route exact path="/" component = {Join}/>
    	<Route exact path="/chat" component = {Chat}/>
    </Router>
  }
}

export default App;
