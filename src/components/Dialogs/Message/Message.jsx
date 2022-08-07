import React from 'react'
import styles from './Message.module.css'

const Message = (props) => {
  return (
    <div className={styles.message}>
      <div className={styles.messageTitle}>
        <img src={props.avaPath} className={styles.messageImg}></img>
        <div className={styles.messageNick}>{props.nick}</div>
      </div>
      <div className={styles.messageText}>{props.message}</div>
    </div>
  )
}

export default Message