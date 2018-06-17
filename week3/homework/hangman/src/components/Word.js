import * as React from 'react'
import './Word.css'

export default function Word(props) {
  return (
    <h1 className="random-word">{props.randomWord}</h1>
  )
}
