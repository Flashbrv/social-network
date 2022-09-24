import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initState = {
  userId: null,
  login: null,
  token: null,
  isLogedin: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
      case SET_USER_DATA: {
        let data = {...action.data}
        let isLogedin = true
        if (!data.userId || !data.login || !data.token) {
          data.userId = null
          data.login = null
          data.token = null
          isLogedin = false
        }
        return {
          ...state,
          ...data,
          isLogedin
        }
      }

      default: 
        return state;
    }
}

export const setAuthUserData = (userId, login, token) => ({type:SET_USER_DATA, data: {userId, login, token}})

export const loginUser = (email, password) => (dispatch) => {
  authAPI.login(email, password)
    .then(data => {      
      let {id, email, token} = data
      dispatch(setAuthUserData(id, email, token))
    })
    .catch(() => {
      dispatch(setAuthUserData(null, null, null))
    })
}

export const logoutUser = () => (dispatch) => {
  authAPI.logout()
    .then(() => {
      dispatch(setAuthUserData(null, null, null))
    })
}

export default authReducer