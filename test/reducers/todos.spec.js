import expect from 'expect'
import clicked from '../../reducers/clicked'
import * as types from '../../constants/ActionTypes'

describe('click reducer', () => {
  it('should handle initial state', () => {
    const initialState = { text: 'Yolo' }
    expect(clicked(initialState, {})).toEqual(initialState)
  })

  it('should handle CLICKED action', () => {
    const initialState = { text: 'Yolo' }
    expect(clicked(initialState, {
      type: types.CLICKED,
      text: 'Clicked'
    })).toEqual({  text: 'Clicked'  })
  })
})
