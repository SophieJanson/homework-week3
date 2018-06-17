import * as React from 'react'
import './Word.css'

export default function Word(props) {
  return (
    <h2 className="random-word">{props.randomWord}</h2>
  )
}
