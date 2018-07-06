import React, { Component } from 'react'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = event => {
    const comment = event.target.value
    this.setState({ comment })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ comment: '' })
  }

  render() {
    const { comment } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment}/>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default CommentBox