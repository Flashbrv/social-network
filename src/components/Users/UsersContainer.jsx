import React from 'react'
import { connect } from 'react-redux'
import { followUser, 
  setCurrentPage, 
  unfollowUser, 
  getUsers } from '../../redux/usersReducer'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
  }

  setCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.usersPerPage)
  }

  render() {
    return (
      <Users 
        users = {this.props.users}
        totalUsersPages = {this.props.totalUsersPages}
        currentPage = {this.props.currentPage}
        setCurrentPage = {this.setCurrentPage}
        followUser = {this.props.followUser}
        unfollowUser = {this.props.unfollowUser}
        isFetching = {this.props.isFetching}
        followingInProgress = {this.props.followingInProgress}
      />
    )
  }  
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersPerPage: state.usersPage.usersPerPage,
    totalUsersPages: state.usersPage.totalUsersPages,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default  connect(mapStateToProps, 
  {
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers
  })(UsersContainer)