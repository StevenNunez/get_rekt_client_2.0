export default (state=[], action) => {
  switch (action.type) {
    case "RECEIVE_COCKTAILS":
      return [...state, ...action.cocktails]
    default:
      return state
  }
}
