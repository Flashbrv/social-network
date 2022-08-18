import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator())
    },
    changePostText: (text) => {
      dispatch(changePostTextActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer