import React, { useEffect, useState } from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
    
  const [activeDialog, setAcctiveDialog] = useState(0)
  const [dialogElements, setDialogElements] = useState([])
  useEffect(() => {
    setDialogElements(props.state.dialogs.map( dialog  => {
      let attr = {
        name: dialog.name,
        id: dialog.id,
        key: dialog.id,
        onDialogSelected: handleDialogSelected
      }
      if ( dialog.id === activeDialog ) {
        attr['isActive'] = true
      }
      return <Dialog  {...attr} />
    }))
  }, [activeDialog])

  const handleDialogSelected = (dialogId) => {
    setAcctiveDialog(dialogId)
  }
  
  let messageElements = props.state.messages
    .map( message => <Message nick={message.nick} avaPath={message.ava} message={message.text} key={message.id} /> )

  return (
    <div className={styles.dialogs}>
      <div className={styles.persons}>
        <h2 className={styles.personsTitle}>Список контактів</h2>
        { dialogElements }
      </div>
      <div className={styles.messages}>
        { messageElements }
      </div>
    </div>
  )
}

export default Dialogs
