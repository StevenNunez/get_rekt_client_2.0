import axios from 'axios'
export const getCocktail = (cocktailId) => {
  return (dispatch, getState) => {
    if (getState().currentCocktail.id === parseInt(cocktailId, 10)) { return }
    // 👺
    axios
      .get(`http://localhost:4000/v1/cocktails/${cocktailId}`)
      .then(({data}) => {
        // 😇
        dispatch({type: "SET_CURRENT_COCKTAIL", cocktail: data})
      })
  }
}
