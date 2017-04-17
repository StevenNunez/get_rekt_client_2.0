import React from 'react'
import {connect} from 'react-redux'

import CocktailListItem from './CocktailListItem'

const CocktailList = (props) => {
  return (
    <ul className="col-xs-4">
      {props.cocktails.map((cocktail) => <CocktailListItem
        key={cocktail.id}
        cocktail={cocktail}
      />)
      }
    </ul>
  )
}

const mapStateToProps = ({cocktails}) => {
  return {
    cocktails
  }
}

export default connect(mapStateToProps)(CocktailList)
