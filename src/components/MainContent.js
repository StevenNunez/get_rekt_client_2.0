import React from 'react'
import {connect} from 'react-redux'

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

const mapStateToProps = (state) =>{
  return {
    cocktail: state.currentCocktail
  }
}

export default connect(mapStateToProps)(MainContent)
