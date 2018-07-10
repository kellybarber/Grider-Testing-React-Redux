import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = event => {
    const comment = event.target.value
    this.setState({ comment })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { comment } = this.state
    const { saveComment } = this.props

    saveComment(comment)

    this.setState({ comment: '' })
  }

  render() {
    const { comment } = this.state
    const { fetchComments } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={comment}/>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={fetchComments}>
          Fetch Comments
        </button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox)