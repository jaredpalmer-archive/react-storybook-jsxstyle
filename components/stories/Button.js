import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../Button'

storiesOf('Button', module)
  .add('default', () => (
      <Button onClick={action('clicked')}>Hello</Button>
  )).add('loading', () => (
      <Button isLoading>Hello</Button>
  ))
