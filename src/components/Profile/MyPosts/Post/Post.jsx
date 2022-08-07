import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_img}></div>
      <div className={styles.post_text}>{props.message}</div>
      <div className={styles.likes}><span>Likes:</span>{props.likes}</div>
    </div>
  )
}

export default Post