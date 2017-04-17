import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getCocktail } from "../actions"

class CocktailDetail extends Component {

  componentWillMount(){
    let cocktailId = this.props.match.params.cocktailId
    if (!cocktailId) { return }
    this.props.dispatch(getCocktail(cocktailId))
  }

  componentWillReceiveProps({match: {params: {cocktailId}}}){
    if (this.props.match.params.cocktailId === cocktailId) { return }
    this.props.dispatch(getCocktail(cocktailId))
  }

  render(){
    return (
      <div className="col-xs-8">
        <h1>{this.props.cocktail.name}</h1>
        <blockquote className="blockquote">
          <p className="mb-0">{this.props.cocktail.description}</p>
          <footer className="blockquote-footer">{this.props.cocktail.source.replace("—", "")}</footer>
        </blockquote>
        <ul className="proportions">
          {this.props.cocktail.proportions.map((proportion) => (
            <li key={proportion}>{proportion}</li>
          ))}
        </ul>
        <p>{this.props.cocktail.instructions}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cocktail: state.currentCocktail
  }
}

export default connect(mapStateToProps)(CocktailDetail)
