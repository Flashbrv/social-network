import { usersAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SHOW_FETCHING = 'SHOW_FETCHING'
const HIDE_FETCHING = 'HIDE_FETCHING'

const initialState = {
  posts: [
    {id: 1, message: 'Hey, why nobody love me?', likes: 15},
    {id: 2, message: 'It is my first React app! Hey!', likes: 25}
  ],
  newPostText: '',
  userProfile: {},
  isFetching: false
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

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.profile
      }
    }

    case SHOW_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case HIDE_FETCHING:
      return {
        ...state,
        isFetching: false
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
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}
export const showFetching = () => ({type:SHOW_FETCHING})
export const hideFetching = () => ({type:HIDE_FETCHING})

export const getUserData = (userId) => (dispatch) => {
  dispatch(showFetching())
  if (!userId) {
    userId = 1
  }
  usersAPI.getUser(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
      dispatch(hideFetching())
    })
}

export default profileReducer