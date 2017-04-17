import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'

import CocktailList from "./components/CocktailList"
import CocktailDetail from "./components/CocktailDetail"

class Cocktails extends Component {
  render() {
    return (
      <div className="container">
        <CocktailList />
        <Route path="/cocktails/:cocktailId" component={CocktailDetail} />
      </div>
    );
  }
}

export default Cocktails;
