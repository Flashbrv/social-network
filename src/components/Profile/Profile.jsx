import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return(
    <div>
      {!props.isFetching ? <ProfileInfo {...props.userProfile} /> : <Preloader />}
      <MyPostsContainer />
    </div>
  )
}

export default Profile