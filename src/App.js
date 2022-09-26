import React from 'react'
import './App.css'
import ProfileContainer from './components/Profile/ProfileContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import MainLayout from './components/layout/MainLayout'
import Login from './components/Login/Login'

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <MainLayout /> }>
          <Route index element={ <Navigate to='/profile' replace /> } />
          <Route path='profile' element={ <ProfileContainer /> } />
          <Route path='profile/:userId' element={ <ProfileContainer /> } />
          <Route path='dialogs' element={ <DialogsContainer /> } />
          <Route path='news' element={ <News /> } />
          <Route path='music' element={ <Music /> } />
          <Route path='settings' element={ <Settings /> } />
          <Route path='users' element={ <UsersContainer /> } />
          <Route path='login' element={ <Login /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
