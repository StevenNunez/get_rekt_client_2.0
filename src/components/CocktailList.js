import React from 'react'

import CocktailListItem from './CocktailListItem'

export default (props) => {
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
