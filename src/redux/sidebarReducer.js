
const initialState = {
  friendsOnline: [
    {id: 1, name: 'Вікторія', ava: 'https://bipbap.ru/wp-content/uploads/2021/09/1-8.jpg'},
    {id: 2, name: 'Сергій', ava: ''},
    {id: 5, name: 'Валерій', ava: ''},
    {id: 6, name: 'Ігор', ava: ''},
  ]
}

const sidebarReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return {...state}
  }
}

export default sidebarReducer