import { NEW_GAME, MAKE_GUESS } from '../actions/game'

const initialState = {
  randomWord: null,
  guesses: []
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case NEW_GAME:
      return {
        guesses: [],
        randomWord: action.payload
      }

    case MAKE_GUESS:
      return {
        ...state,
        guesses: state.guesses.concat(action.payload.guess)
      }
    default:
      return state
  }
}

export default reducer
