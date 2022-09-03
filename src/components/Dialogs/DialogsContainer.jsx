import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { addMessage, changeMessageText, changeSelectedDialog } from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage
  }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, changeMessageText, changeSelectedDialog})(Dialogs)

export default DialogsContainer
