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
      return {
        ...state, 
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    }
    case CHANGE_POST_TEXT: {
      return {
        ...state, 
        newPostText: action.text
      }
    }
    default: 
      return state
  }
}

export const addPost = () => ({type: ADD_POST})
export const changePostText = (text) => {
  return {
    type: CHANGE_POST_TEXT, 
    text: text
  }
}

export default profileReducer