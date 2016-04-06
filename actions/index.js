import * as types from '../constants/ActionTypes'

// Your Redux actions

export function click(text) {
  return { type: types.CLICKED, text }
}
