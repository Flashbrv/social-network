import React from 'react';
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
      <div className={styles.form}>
        <h3>My posts</h3>
        <form>
          <textarea className={styles.text} type='textarea' rows={4} placeholder='Your news' />
          <button className={styles.btn}>Send</button>
        </form>
      </div>
      <div className={styles.posts_list}>
        <div className={styles.post}>
          <div className={styles.post_img}></div>
          <div className={styles.post_text}>Hey, why nobody love me?</div>
        </div>
        <div className={styles.post}>
          <div className={styles.post_img}></div>
          <div className={styles.post_text}>It's our new programm! Hey!</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;