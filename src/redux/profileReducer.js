const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0
      }
      let newState = {...state, newPostText: ''}
      newState.posts.push(newPost)
      console.log(newState)
      return newState
    }
    case CHANGE_POST_TEXT: {
      let newState = ({...state, newPostText: action.text})
      return newState
    }
    default: 
      return {...state}
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