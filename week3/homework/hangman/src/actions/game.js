import * as gameLogic from '../lib/game'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
  const newRandomWord = gameLogic.randomWord()
  return {
    type: NEW_GAME,
    payload: newRandomWord
  }
}

export function makeGuess(guess) {
  return {
    type: MAKE_GUESS,
    payload: {
      guess: guess,
      guesses: []
    }
  }
}
