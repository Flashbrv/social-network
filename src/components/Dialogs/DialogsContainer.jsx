import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, changeMessageTextActionCreator, changeSelectedDialogActionCreator } from '../../redux/dialogsReducer'

const DialogsContainer = (props) => {
  let state = props.store.getState()

  const changeMessageText = (text) => {
    let action = changeMessageTextActionCreator(text)
    props.store.dispatch(action)
  }
  const addMessage = () => {
    let action = addMessageActionCreator()
    props.store.dispatch(action)
  }

  const selectedDialogChanged = (id) => {
    let action = changeSelectedDialogActionCreator(id)
    props.store.dispatch(action)
  }

  return <Dialogs changeMessageText={changeMessageText} 
                  addMessage={addMessage}
                  selectedDialogChanged={selectedDialogChanged}
                  newMessageText={state.dialogsPage.newMessageText} 
                  dialogsPage={state.dialogsPage} />
}

export default DialogsContainer
