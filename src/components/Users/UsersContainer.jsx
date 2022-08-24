import React from 'react'
import { connect } from "react-redux"
import { followUserAC, setUsersAC, unfollowUserAC } from '../../redux/usersReducer'
import Users from "./Users"

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followUserAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowUserAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer