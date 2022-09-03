import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postElements = props.profilePage.posts.map( post => <Post message={post.message} likes={post.likes} key={post.id} /> )
  
  const addNewPostHandler = (event) => {
    event.preventDefault()
    props.addPost()
  }

  const changePostTextHandler = (event) => {
    let text = event.target.value
    props.changePostText(text)
  }

  return (
    <div>
      <div className={styles.form}>
        <h3>My posts</h3>
        <form>
          <textarea onChange={changePostTextHandler} value={props.profilePage.newPostText} className={styles.text} type='textarea' rows={4} placeholder='Your news' />
          <button onClick={ addNewPostHandler } className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.posts_list}>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts