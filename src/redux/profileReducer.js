const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

const initialState = {
  posts: [
    {id: 1, message: 'Hey, why nobody love me?', likes: 15},
    {id: 2, message: 'It is my first React app! Hey!', likes: 25}
  ],

  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0
      }
      let newState = {...state, newPostText: ''}
      newState.posts = [...state.posts]
      newState.posts.push(newPost)
      return newState
    }
    case CHANGE_POST_TEXT: {
      let newState = ({...state, newPostText: action.text})
      return newState
    }
    default: 
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostTextActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT, 
    text: text
  }
}

export default profileReducer