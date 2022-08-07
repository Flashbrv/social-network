import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.image}></div>
      <div className={styles.person}>
        <div className={styles.person_img}></div>
        <div>
          <div className={styles.person_title}>
            Roman B.
          </div>
          <div className={styles.person_data}>
            <span>Date of birth:</span> 20 december<br/>
            <span>City:</span> Poltava<br/>
            <span>Education:</span> NUFI '06<br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo