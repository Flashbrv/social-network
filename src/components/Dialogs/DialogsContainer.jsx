import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { addMessage, changeMessageText, changeSelectedDialog } from '../../redux/dialogsReducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsPage: state.dialogsPage
  }
}

export default compose(
  connect(mapStateToProps, {addMessage, changeMessageText, changeSelectedDialog}),
  withAuthRedirect
)(Dialogs)
