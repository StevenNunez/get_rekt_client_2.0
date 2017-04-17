import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import CocktailsReducer from './cocktailsReducer'
import CurrentCocktailReducer from './currentCocktailReducer'

export default combineReducers({
  cocktails: CocktailsReducer,
  currentCocktail: CurrentCocktailReducer,
  router: routerReducer
})
