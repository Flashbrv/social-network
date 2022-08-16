import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { addMessageActionCreator, changeMessageTextActionCreator } from '../../redux/dialogsReducer'

const Dialogs = (props) => {

  let textareaElement = React.createRef()
  const changeMessageTextHandler = () => {
    let text = textareaElement.current.value
    let action = changeMessageTextActionCreator(text)
    props.dispatch(action)
  }
  const addMessageHandler = (event) => {
    let action = addMessageActionCreator()
    props.dispatch(action)
    event.preventDefault()
  }

  let messageElements = props.dialogsPage.messages
    .map( message => <Message nick={message.nick} avaPath={message.ava} message={message.text} key={message.id} /> )

  let dialogElements = props.dialogsPage.dialogs
    .map( dialog  => {
      let attr = {
        name: dialog.name,
        id: dialog.id,
        key: dialog.id,
        dispatch: props.dispatch
      }
      if ( dialog.id === props.dialogsPage.selectedDialogId ) {
        attr['isActive'] = true
      }
      return <Dialog  {...attr} />
    })


  return (
    <div className={styles.dialogs}>
      <div className={styles.persons}>
        <h2 className={styles.personsTitle}>Список контактів</h2>
        { dialogElements }
      </div>
      <div className={styles.form}> 
        <form>
          <textarea ref={ textareaElement } onChange={changeMessageTextHandler} value={props.dialogsPage.newMessageText} className={styles.text} type='textarea' rows={4} placeholder='Your message' />
          <button onClick={ addMessageHandler }  className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.messages}>
        { messageElements }
      </div>
    </div>
  )
}

export default Dialogs
