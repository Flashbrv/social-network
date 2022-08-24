import React from 'react'
import styles from './User.module.css'


const User = (props) => {
  return (
    <div className={styles.user}>
      <div className={styles.userLabel}>
        <img src={props.avaPath} className={styles.userImg}></img>
        {props.followed ? <button className={styles.followBtn} onClick={() => {props.unfollow(props.id)}}>UNFOLLOW</button>
          : <button className={styles.followBtn} onClick={() => {props.follow(props.id)}}>FOLLOW</button>}
      </div>
      <div className={styles.userContent}>
        <div className={styles.fullName}>{props.fullName}</div>
        <div className={styles.aboutMe}>{props.aboutMe}</div>
        <div className={styles.city}>{props.location.city}</div>
        <div className={styles.country}>{props.location.country}</div>
      </div>
    </div>
  )
}

export default User