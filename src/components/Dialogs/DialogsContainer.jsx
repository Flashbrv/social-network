import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { addMessageActionCreator, changeMessageTextActionCreator, changeSelectedDialogActionCreator } from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (text) => {
        dispatch(changeMessageTextActionCreator(text))      
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    selectedDialogChanged: (id) => {
      dispatch(changeSelectedDialogActionCreator(id))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
