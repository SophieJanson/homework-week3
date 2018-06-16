import * as React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeMessage(props) {
  return(
    <div>
      <p>Hello there!</p>
      <Link to={`./hangman`}><span className="button start">Play Game</span></Link>
    </div>
  )
}
