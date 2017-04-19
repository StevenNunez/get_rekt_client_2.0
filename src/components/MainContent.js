import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getCocktail } from '../actions'

class MainContent extends Component {
  componentWillMount(){
    let {match: {params: {cocktailId}}} = this.props
    if (!cocktailId) { return }
    this.props.dispatch(getCocktail(cocktailId))
  }

  componentWillReceiveProps({match: {params: {cocktailId}}}){
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
          {this.props.cocktail.proportions.map((proportion) => {
            return <li key={proportion}>{proportion}</li>
          })}
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

export default connect(mapStateToProps)(MainContent)
