import axios from 'axios'
export const getCocktail = (cocktail) => {
  return (dispatch) => {
    // 👺
    axios
      .get(`http://localhost:4000/v1/cocktails/${cocktail.id}`)
      .then(({data}) => {
        // 😇
        debugger
        dispatch({type: "SET_CURRENT_COCKTAIL", cocktail: data})
      })
  }
}
