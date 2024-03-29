import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import styles from './Preloader.module.css'


const Preloader = (props) => {
  return <img src={preloader} className={styles.preloader} />
}

export default Preloader