import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={styles.form}>
        <h3>My posts</h3>
        <form>
          <textarea className={styles.text} type='textarea' rows={4} placeholder='Your news' />
          <button className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.posts_list}>
        <Post message='Hey, why nobody love me?' likes='15' />
        <Post message="It's my first React app! Hey!" likes='25' />
      </div>
    </div>
  )
}

export default MyPosts;