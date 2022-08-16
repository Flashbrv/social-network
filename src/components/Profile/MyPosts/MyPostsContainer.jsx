import React from 'react'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  let state = props.store.getState()

  const addNewPost = () => {
    let action = addPostActionCreator()
    props.store.dispatch(action)
  }

  const changePostText = (text) => {
    let action = changePostTextActionCreator(text)
    props.store.dispatch(action)
  }

  return <MyPosts addNewPost={addNewPost}
                  changePostText={changePostText}
                  profilePage={state.profilePage}
  />
}

export default MyPostsContainer