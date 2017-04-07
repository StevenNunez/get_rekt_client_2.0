import React, { Component } from 'react';
import axios from 'axios'

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

const Sidebar = (props) => {
  return (
    <div className="col-xs-4">
      <CocktailList 
        cocktails={props.cocktails} 
        onCurrentCocktailChange={props.onCurrentCocktailChange}
      />
    </div>
  )
}


const CocktailList = (props) => {
  return (
    <ul>
      {props.cocktails.map((cocktail) => <CocktailListItem 
        key={cocktail.id} 
        cocktail={cocktail} 
        onCurrentCocktailChange={props.onCurrentCocktailChange}
      />) 
      }
    </ul>
  )
}

const CocktailListItem = (props) => {
  return (
    <li><a onClick={(e) => {
      e.preventDefault()
      props.onCurrentCocktailChange(props.cocktail)
    }} href="#">{props.cocktail.name}</a></li>
  )
}

const MainContent = (props) => {
  return (
    <div className="col-xs-8">
      <h1>{props.cocktail.name}</h1>
      <blockquote className="blockquote">
        <p className="mb-0">{props.cocktail.description}</p>
        <footer className="blockquote-footer">{props.cocktail.source.replace("—", "")}</footer>
      </blockquote>
      <ul className="proportions">
        {props.cocktail.proportions.map((proportion) => {
          return <li>{proportion}</li>
        })}
      </ul>
      <p>{props.cocktail.instructions}</p>
    </div>
  )
}
export default App;

