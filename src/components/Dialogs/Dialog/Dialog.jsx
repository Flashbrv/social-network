import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialog.module.css'

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;

  const onClickHandler = (event) => {
    event.preventDefault()
    props.changeSelectedDialog(props.id)
  }

  return (
    <div className={styles.person + (props.isActive ? " " + styles.active : "")}>
      <NavLink to={path} onClick={ onClickHandler }>{props.name}</NavLink>
    </div>
  )
}

export default Dialog