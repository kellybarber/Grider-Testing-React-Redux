import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  renderComments = () => {
    const { comments } = this.props

    return comments.map(comment => <li key={comment}>{comment}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)