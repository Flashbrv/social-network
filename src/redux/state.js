import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

const myAvaPath = 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hey, why nobody love me?', likes: 15},
        {id: 2, message: 'It is my first React app! Hey!', likes: 25}
      ],
    
      newPostText: '',
      
      getNextId() {
        return this.posts.map(p => p.id).reduce((prev, cur) => prev > cur ? prev : cur) + 1
      }
    },

    dialogsPage: {
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

      newMessageText: '', 

      getNextId() {
        return this.dialogs.map(d => d.id).reduce((prev, cur) => prev > cur ? prev : cur) + 1
      }
    },

    sidebar: {
      friendsOnline: [
        {id: 1, name: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
        {id: 2, name: 'Сергій', ava: ''},
        {id: 5, name: 'Валерій', ava: ''},
        {id: 6, name: 'Ігор', ava: ''},
      ]
    }
  },
  
  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._notifyObsever()
  }, 

  subscribe(observer) {
    this._notifyObsever = observer
  },

  _notifyObsever() {
    console.log('State was changed')
  }
}



export default store