import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialog.module.css'

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;

  const onSelect = (event) => {
    props.onDialogSelected(props.id)
    event.preventDefault()
  }

  return (
    <div className={styles.person + (props.isActive ? " " + styles.active : "")}>
      <NavLink to={path} onClick={event => onSelect(event)}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog