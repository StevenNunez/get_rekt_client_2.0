import React from 'react'

import CocktailList from './CocktailList'

export default (props) => {
  return (
    <div className="col-xs-4">
      <CocktailList
        cocktails={props.cocktails}
        onCurrentCocktailChange={props.onCurrentCocktailChange}
      />
    </div>
  )
}
