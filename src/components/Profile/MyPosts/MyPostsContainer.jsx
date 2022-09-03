import React from 'react'
import { connect } from 'react-redux'
import { addPost, changePostText } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, changePostText})(MyPosts)

export default MyPostsContainer