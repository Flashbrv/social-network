const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'
const CHANGE_SELECTED_DIALOG = 'CHANGE_SELECTED_DIALOG'
const myAvaPath = 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'

const initialState = {
  dialogs: [
    {id: 1, name: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
    {id: 2, name: 'Сергій', ava: ''},
    {id: 3, name: 'Олександр', ava: ''},
    {id: 4, name: 'Володимир', ava: ''},
    {id: 5, name: 'Валерій', ava: ''},
    {id: 6, name: 'Ігор', ava: ''},
  ],

  selectedDialogId: 1,
  
  messages: [
    {id: 1, text: 'Норм.', nick: 'Я', ava: myAvaPath},
    {id: 2, text: 'Ти як?', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
    {id: 3, text: 'Круто!', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
    {id: 4, text: 'Як справи?', nick: 'Я', ava: myAvaPath},
    {id: 5, text: 'Хай!', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
    {id: 6, text: 'Привіт!', nick: 'Я', ava: myAvaPath},
  ],

  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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
      newState.messages = [...state.messages]
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
      return state
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