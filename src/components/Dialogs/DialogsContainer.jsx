import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, changeMessageTextActionCreator, changeSelectedDialogActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext'

const DialogsContainer = (props) => {
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState()

        const changeMessageText = (text) => {
          let action = changeMessageTextActionCreator(text)
          store.dispatch(action)
        }
        const addMessage = () => {
          let action = addMessageActionCreator()
          store.dispatch(action)
        }

        const selectedDialogChanged = (id) => {
          let action = changeSelectedDialogActionCreator(id)
          store.dispatch(action)
        }
        return (
          <Dialogs changeMessageText={changeMessageText} 
                  addMessage={addMessage}
                  selectedDialogChanged={selectedDialogChanged}
                  newMessageText={state.dialogsPage.newMessageText} 
                  dialogsPage={state.dialogsPage} />
        )
      }
    }
  </StoreContext.Consumer> 
}

export default DialogsContainer
