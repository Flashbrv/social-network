const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hey, why nobody love me?', likes: 15},
      {id: 2, message: 'It is my first React app! Hey!', likes: 25}
    ]
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
    
    messages: [
      {id: 1, text: 'Норм.', nick: 'Я', ava: 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'},
      {id: 2, text: 'Ти як?', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
      {id: 3, text: 'Круто!', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
      {id: 4, text: 'Як справи?', nick: 'Я', ava: 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'},
      {id: 5, text: 'Хай!', nick: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
      {id: 6, text: 'Привіт!', nick: 'Я', ava: 'https://vjoy.cc/wp-content/uploads/2020/11/volk_kartinki_11_02065205-768x576-1.jpg'},
    ]
  },

  sidebar: {
    friendsOnline: [
      {id: 1, name: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
      {id: 2, name: 'Сергій', ava: ''},
      {id: 5, name: 'Валерій', ava: ''},
      {id: 6, name: 'Ігор', ava: ''},
    ]
  }
}

export default state