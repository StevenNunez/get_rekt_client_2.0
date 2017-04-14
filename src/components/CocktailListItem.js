import React from 'react'

export default (props) => {
  return (
    <li><a onClick={(e) => {
      e.preventDefault()
      props.onCurrentCocktailChange(props.cocktail)
    }} href="#">{props.cocktail.name}</a></li>
  )
}
