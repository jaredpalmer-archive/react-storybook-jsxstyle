import React, { PropTypes } from 'react'
import Block from 'jsxstyle/Block'
import Flex from 'jsxstyle/Flex'
import s from '../constants/Style'

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      hovered: false,
      touched: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
  }

  handleMouseEnter() {
    this.setState({ hovered: true })
  }

  handleMouseLeave() {
    this.setState({ hovered: false })
  }

  handleTouchStart() {
    this.setState({ touched: true })
  }

  handleTouchEnd() {
    this.setState({ touched: false })
  }


  render() {
    const { size, isLoading, disabled, children, onClick, ...other } = this.props
    let bg = this.state.hovered ? s.primaryColor : s.secondaryColor

    return (
      <div
        role="button"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onTouchLeave={this.handleTouchEnd}
        onTouchCancel={this.handleTouchEnd}
        onClick={onClick}>
        <Flex
          paddingTop={8}
          paddingBottom={8}
          paddingLeft={14}
          paddingRight={14}
          background={this.props.disabled ? '#999' : bg}
          transition=".2s background ease"
          color="#fff"
          fontWeight={500}
          fontFamily={s.sans}
          fontSize={16}
          maxWidth={182}
          alignItems="center"
          justifyContent="center"
          borderRadius={3}>
          {isLoading ? 'Loading...' : children}
        </Flex>
      </div>
    )
  }
}

export default Button
