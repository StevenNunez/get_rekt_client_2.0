import React from 'react'
import {connect} from 'react-redux'

import { getCocktail } from '../actions'

const CocktailListItem = (props) => {
  return (
    <li><a onClick={(e) => {
      e.preventDefault()
      props.dispatch(getCocktail(props.cocktail))
    }} href="#">{props.cocktail.name}</a></li>
  )
}

export default connect()(CocktailListItem)
