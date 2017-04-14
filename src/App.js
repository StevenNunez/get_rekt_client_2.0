import React, { Component } from 'react';
import axios from 'axios'

import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

class App extends Component {
  constructor(){
    super()
    this.state = {
      cocktails: [],
      currentCocktail: {source: "Select a drink on the left", proportions: []}
    }

    this.onCurrentCocktailChange = this.onCurrentCocktailChange.bind(this)
  }

  onCurrentCocktailChange(cocktail){
    axios
      .get(`http://localhost:4000/v1/cocktails/${cocktail.id}`)
      .then(({data}) => {
        this.setState({ currentCocktail: data})
      })
  }

  componentWillMount(){
    axios
      .get('http://localhost:4000/v1/cocktails')
      .then(({data}) => {
        this.setState({ cocktails: data})
      })
  }

  render() {
    return (
      <div className="container">
        <Sidebar
          cocktails={this.state.cocktails}
          onCurrentCocktailChange={this.onCurrentCocktailChange}
        />
        <MainContent cocktail={this.state.currentCocktail} />
      </div>
    );
  }
}

export default App;
