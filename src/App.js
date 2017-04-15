import React, { Component } from 'react';
import axios from 'axios'

import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"


class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
