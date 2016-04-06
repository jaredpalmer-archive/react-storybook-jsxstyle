import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../components/Button'
import * as ClickActions from '../actions'
import {Flex} from 'jsxstyle'

class App extends Component {
  render() {
    const { text, actions } = this.props
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        margin={20}>
        <Button
          bg="#0070ff"
          onClick={() => actions.click('Clicked')}
          text={text}/>
      </Flex>
    )
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    text: state.clicked.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ClickActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
