'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { CommentScore } from '.'

it('Should render correctly without props', () => {
  const component = <CommentScore />

  expect(shallow(component)).toMatchSnapshot()
})
