import * as React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeMessage(props) {
  return(
    <div>
      <p>Hello there. Let's play a game of Hangman! </p>
      <Link to={`./hangman`}><button className="button start">Start playing!</button></Link>
    </div>
  )
}
