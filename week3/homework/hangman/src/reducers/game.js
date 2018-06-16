import { NEW_GAME, MAKE_GUESS } from '../actions/game'

const initialState = {
  randomWord: null,
  guesses: []
}

const reducer = (state = initialState, action = {}) => {
  if(action.type === NEW_GAME ) {
    return {
      guesses: [],
      randomWord: action.payload
    }
  }
  if(action.type === MAKE_GUESS) {
    return {
      ...state,
      guesses: state.guesses.concat(action.payload.guess)
    }
  }
  return state
}

export default reducer
