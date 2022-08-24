import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={ <Profile /> } />
          <Route path='dialogs' element={ <DialogsContainer /> } />
          <Route path='profile' element={ <Profile /> } />
          <Route path='news' element={ <News /> } />
          <Route path='music' element={ <Music /> } />
          <Route path='settings' element={ <Settings /> } />
          <Route path='users' element={ <UsersContainer /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
