import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return(
    <div className={styles.container}>
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
      <MyPosts />
    </div>
  )
}

export default Profile;