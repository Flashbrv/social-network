const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'
const CHANGE_SELECTED_DIALOG = 'CHANGE_SELECTED_DIALOG'


const dialogsReducer = (state, action) => {
  switch(action.type) { 
    case ADD_MESSAGE: {
      let newId = state.messages.length + 1
      let newMessage = {
        id: newId,
        text: state.newMessageText,
        nick: 'Я',
        ava: 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'
      }
      let newState = {...state, newMessageText: ''}
      newState.messages.push(newMessage)
      return newState
    }
    case CHANGE_MESSAGE_TEXT: {
      let newState = {...state, newMessageText: action.text}
      return newState
    }
    case CHANGE_SELECTED_DIALOG: {
      let newState = {...state, selectedDialogId: action.id}
      return newState
    }
    default:
      return {...state}
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeMessageTextActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGE_TEXT, 
    text: text
  }
}
export const changeSelectedDialogActionCreator = (id) => {
  return {
    type: CHANGE_SELECTED_DIALOG,
    id: id
  }
}

export default dialogsReducer