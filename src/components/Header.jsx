import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324' />
      <div className={styles.title}>Накраща соціальна мережа</div>
    </header>
  )
}

export default Header;