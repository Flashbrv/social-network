const SET_USERS = 'SET_USERS'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'

const initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case FOLLOW_USER: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }

    case UNFOLLOW_USER: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }

    default:
      return state
  }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followUserAC = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId})


export default usersReducer;