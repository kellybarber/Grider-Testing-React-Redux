import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
  const initialState = { comments: ['commentOne', 'commentTwo'] }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one list item per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('commentOne')
  expect(wrapped.render().text()).toContain('commentTwo')
})