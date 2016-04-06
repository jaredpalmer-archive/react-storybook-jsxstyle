import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../Button'
import Flex from 'jsxstyle/Flex'

storiesOf('Button', module)
  .add('default', () => {
    const state = { text: 'Click Me' }
    return getButton(state)
  })
  .add('clicked', () => {
    const state = { text: 'Clicked' }
    return getButton(state)
  })

function getButton(state) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      margin={20}>
      <Button
        onCLick={action('click')}
        text={state.text}>
      </Button>
    </Flex>
  )
}
