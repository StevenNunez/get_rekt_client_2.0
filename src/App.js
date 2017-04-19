import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route path="/cocktails/:cocktailId" component={MainContent} />
      </div>
    );
  }
}

export default App;
