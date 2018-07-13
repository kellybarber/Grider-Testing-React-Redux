import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'

class App extends Component {
  renderHeader = () => (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='post'>Post Comment</Link></li>
      <li>{this.renderButton()}</li>
    </ul>
  )

  renderButton = () => {
    const { auth, changeAuth } = this.props

    if (!auth) return <button onClick={() => changeAuth(true)}>Sign In</button>
    if (auth)  return <button onClick={() => changeAuth(false)}>Sign Out</button>

  }


  render () {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path='/' component={CommentList} />
        <Route path='/post'   component={CommentBox} />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, actions)(App)