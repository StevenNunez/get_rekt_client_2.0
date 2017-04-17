import React from 'react'
import { Link } from 'react-router-dom'

const CocktailListItem = (props) => {
  return (
    <li>
      <Link to={`/cocktails/${props.cocktail.id}`}>{props.cocktail.name}</Link>
    </li>
  )
}

export default CocktailListItem
