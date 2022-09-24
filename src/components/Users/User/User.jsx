import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './User.module.css'


const User = (props) => {
  return (
    <div className={styles.user}>
      <div className={styles.userLabel}>
        <NavLink to={'/profile/' + props.id}>
          <img src={props.avaPath} className={styles.userImg}></img>
        </NavLink>
        {props.followed 
          ? <button disabled={props.followingInProgress.some(userId => userId === props.id)} 
                    className={styles.followBtn} onClick={() => {props.unfollowUser(props.id)}}>UNFOLLOW</button>
          : <button disabled={props.followingInProgress.some(userId => userId === props.id)} 
                    className={styles.followBtn} onClick={() => {props.followUser(props.id)}}>FOLLOW</button>}
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