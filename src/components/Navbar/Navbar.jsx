import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer'
import styles from './Navbar.module.css'

const Navbar = (props) => {
  return(
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to='/profile' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Профіль
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/dialogs' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Повідомлення
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/news' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Новини
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/music' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Музика
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/settings' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Налаштування
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/users' className={ ({isActive}) => isActive ? styles.activeLink : undefined } >
            Користувачі
          </NavLink>
        </div>
      </nav>
      
      <FriendsOnlineContainer />
    </div>
  )
}

export default Navbar