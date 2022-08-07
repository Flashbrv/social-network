import React from 'react'
import styles from './FriendsOnline.module.css'

const FriendsOnline = (props) => {
  return (
    <div className={styles.friendsOnline}>
      <ul className={styles.friendsOnlineList}>
        {props.state.map(f => <li className={styles.friendsOnlineItem} key={f.id}>{f.name}</li> )}
      </ul>
    </div>
  )
}

export default FriendsOnline