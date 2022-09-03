import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

  const changeMessageTextHandler = (event) => {
    let text = event.target.value
    props.changeMessageText(text)
  }
  const addMessageHandler = (event) => {
    props.addMessage()
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
        changeSelectedDialog: props.changeSelectedDialog
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
          <textarea onChange={changeMessageTextHandler} value={props.newMessageText} className={styles.text} type='textarea' rows={4} placeholder='Your message' />
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
