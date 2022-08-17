import React from 'react'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState()

          const addNewPost = () => {
            let action = addPostActionCreator()
            store.dispatch(action)
          }

          const changePostText = (text) => {
            let action = changePostTextActionCreator(text)
            store.dispatch(action)
          }

          return (
            <MyPosts addNewPost={addNewPost}
                  changePostText={changePostText}
                  profilePage={state.profilePage} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer