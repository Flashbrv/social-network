import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className={styles.nav}>
      <div className={styles.item}><button>Profile</button></div>
      <div className={styles.item}><button>Messages</button></div>
      <div className={styles.item}><button>News</button></div>
      <div className={styles.item}><button>Settings</button></div>
    </nav>
  )
}

export default Navbar;