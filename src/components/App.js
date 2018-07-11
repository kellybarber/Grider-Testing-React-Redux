import React from 'react'
import { Route } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return (
    <div>
      <Route exact path='/' component={CommentList} />
      <Route path='/post'   component={CommentBox} />
    </div>
  )
}