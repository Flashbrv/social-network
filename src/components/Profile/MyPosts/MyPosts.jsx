import React from 'react'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/profileReducer'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postElements = props.profilePage.posts.map( post => <Post message={post.message} likes={post.likes} key={post.id} /> )
  
  let textareaElement = React.createRef()
  
  const addNewPost = (event) => {
    event.preventDefault()
    let action = addPostActionCreator()
    props.dispatch(action)
  }

  const changePostTextHandler = () => {
    let text = textareaElement.current.value
    let action = changePostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div>
      <div className={styles.form}>
        <h3>My posts</h3>
        <form>
          <textarea ref={ textareaElement } onChange={changePostTextHandler} value={props.profilePage.newPostText} className={styles.text} type='textarea' rows={4} placeholder='Your news' />
          <button onClick={ addNewPost } className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.posts_list}>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts