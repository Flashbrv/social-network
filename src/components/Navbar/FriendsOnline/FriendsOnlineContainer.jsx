import React from 'react'
import { connect } from 'react-redux'
import FriendsOnline from './FriendsOnline'

let mapStateToProps = (state) => {
  return {
    friendsOnline: state.sidebar.friendsOnline
  }
}
let mapDispatchToProps = (dispatch) => {
  return { }
}

const FriendsOnlineContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsOnline)

export default FriendsOnlineContainer