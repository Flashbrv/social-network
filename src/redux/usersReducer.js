const SET_USERS = 'SET_USERS'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT' 
const SET_TOTAL_USERS_PAGES = 'SET_TOTAL_USERS_PAGES'
const SHOW_FETCHING = 'SHOW_FETCHING'
const HIDE_FETCHING = 'HIDE_FETCHING'

const initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 5,
  totalUsersCount: 0,
  totalUsersPages: 0,
  isFetching: false
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

    case SET_CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.pageNumber
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case SET_TOTAL_USERS_PAGES: 
      return {
        ...state,
        totalUsersPages: action.totalUsersPages
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

export const setUsers = (users) => ({type: SET_USERS, users})
export const followUser = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUser = (userId) => ({type: UNFOLLOW_USER, userId})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setTotalUsersPages = (totalUsersPages) => ({type: SET_TOTAL_USERS_PAGES, totalUsersPages})
export const showFetching = () => ({type:SHOW_FETCHING})
export const hideFetching = () => ({type:HIDE_FETCHING})

export default usersReducer;