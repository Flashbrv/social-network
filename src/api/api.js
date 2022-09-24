import * as axios from 'axios'
import { tokenManager } from './tokenManager'

const service = axios.create({
  baseURL: 'http://localhost:8080/api/'
})

service.interceptors.request.use(
  config => {
    // Do something before request is sent
    let token = tokenManager.getToken()
    if (token != null) {
      config.headers["Authorization"] = token
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

export const usersAPI = {
  getUsers(currentPage, usersPerPage) {
    return service.get(`users?pageNumber=${currentPage-1}&itemsCount=${usersPerPage}`)
      .then(response => response.data)   
      .catch(errorHandler) 
  },

  getUser(userId) {
    return service.get(`profile/${userId}`)
  },

  followUser(userId) {
    return service.post(`follow/${userId}`)
      .then(response => response.data)
  },

  unfollowUser(userId) {
    return service.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  login(email, password) {

    if (tokenManager.getToken() !== null) {
      tokenManager.removeToken()
    }

    return service.post(`auth/login`, {email, password}, {headers: {'Content-Type': 'application/json'}})
      .catch(errorHandler)
      .then(response => {
        return new Promise((resolve, reject) => { 
          if (!response || response.status !== 200) {
            reject()
          }
          
          if (response.data?.data?.id !== 0) {
            tokenManager.setToken(response.data.data.token)
            resolve(response.data.data)
          }
        })
      })
  },

  logout() {
    return service.post(`auth/logout`)
      .catch(errorHandler)
      .then(response => {
        return new Promise((resolve, reject) => {
          if (response || response?.status === 200) {
            tokenManager.removeToken()
            resolve()
          }
          reject()
        }) 
      })
  }
}

const errorHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}