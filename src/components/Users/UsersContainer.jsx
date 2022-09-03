import React from 'react'
import { connect } from 'react-redux'
import { followUser, hideFetching, setCurrentPage, setTotalUsersCount, setTotalUsersPages, setUsers, showFetching, unfollowUser } from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.showFetching()
    axios.get(`http://localhost:8080/api/users?pageNumber=${this.props.currentPage-1}&itemsCount=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.content)
        this.props.setTotalUsersCount(response.data.totalElements)
        this.props.setTotalUsersPages(response.data.totalPages)
        this.props.hideFetching()
      })
  }

  setCurrentPage = (currentPage) => {
    this.props.showFetching()
    this.props.setCurrentPage(currentPage)
    axios.get(`http://localhost:8080/api/users?pageNumber=${currentPage-1}&itemsCount=${this.props.usersPerPage}`)
      .then(response => {  
        this.props.setUsers(response.data.content)
        this.props.setTotalUsersCount(response.data.totalElements)
        this.props.setTotalUsersPages(response.data.totalPages)
        this.props.hideFetching()
      })
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
    isFetching: state.usersPage.isFetching
  }
}

export default  connect(mapStateToProps, 
  {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setTotalUsersPages,
    showFetching,
    hideFetching
  })(UsersContainer)