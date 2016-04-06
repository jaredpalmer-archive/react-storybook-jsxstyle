import { CLICKED } from '../constants/ActionTypes'

const initialState = {
  text: 'Click Me'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CLICKED:
      return { text: action.text }
    default:
      return state
  }
}

export default reducer
