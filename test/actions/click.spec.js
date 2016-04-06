import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('click actions', () => {
  it('click should create CLICKED action', () => {
    expect(actions.click('Use Redux')).toEqual({
      type: types.CLICKED,
      text: 'Use Redux'
    })
  })
})
