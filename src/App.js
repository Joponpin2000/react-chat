import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat';
import ChatUi from './components/ChatUi';
import Join from './components/Join';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/chatui" component={ChatUi} />
    </Router>
  )
}

export default App;