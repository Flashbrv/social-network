import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324' alt='Logo' />
      <div className={styles.title}>Накраща соціальна мережа</div>
      <div className={styles.loginBlock}>
        { props.isLogedin ? 
          
          <button className={styles.logoutButton} 
            onClick={(e) => {
              e.preventDefault() 
              props.logoutUser()
            }}>{props.login}</button>

          : <NavLink to={'/login'}>Login</NavLink> 
        }
      </div>
    </header>
  )
}

export default Header