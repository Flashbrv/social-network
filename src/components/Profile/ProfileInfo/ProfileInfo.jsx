import React from 'react'
import styles from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLink } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.image}></div>
      <div className={styles.person}>
        <img src={props?.photos?.small} className={styles.person_img}></img>
        <div>
          <div className={styles.person_title}>
            {props?.fullName}
          </div>
          <div className={styles.person_data}>
            <span>About me:</span> {props?.aboutText}<br/>
            <span>City:</span> Poltava<br/>
            <span>Education:</span> NUFI '06<br/>
            <span>I'm looking for a job:</span> {props?.lookingForAJob}<br/>
            <span>Description:</span> {props?.lookingForAJobDescription}<br/>
            <a href={props.contacts?.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={props.contacts?.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={props.contacts?.youtube}><FontAwesomeIcon icon={faYoutube} /></a>
            <a href={props.contacts?.github}><FontAwesomeIcon icon={faGithub} /></a>
            <a href={props.contacts?.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={props.contacts?.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={props.contacts?.website}><FontAwesomeIcon icon={faLink} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo