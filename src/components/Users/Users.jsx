import React from 'react'
import User from './User/User'
import styles from './Users.module.css'
import defaultUserImage from './../../assets/images/user.png'
import Preloader from '../common/Preloader/Preloader'

const Users = (props) => {
  let pageButtons = [] 
  for(let i = 1; i <= props.totalUsersPages; ++i) {
    pageButtons.push(i)
  }
  
  return (
    <div className={styles.usersContainer}>
      <h2 className={styles.title}>Список користувачів</h2>
      {props.isFetching ? <Preloader /> : 
        <div className={styles.pageButtons}>
          {pageButtons.map(b => {
            return (
              <span className={props.currentPage === b ? styles.pageButtonSelected : ''}
                  key={b} 
                  onClick={() => props.setCurrentPage(b)}>
                {b}
              </span>)
            })
          }
        </div>
      }
      <div className={styles.usersList}>
        { props.users.map(u => {
            return (
              <User key={u.id} 
                    id={u.id}
                    avaPath={u.avaPath ? u.avaPath : defaultUserImage} 
                    followed={u.followed} 
                    fullName={u.fullName}
                    aboutMe={u.aboutText} 
                    location={u.location} 
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}
                    followingInProgress = {props.followingInProgress} />
            )}) 
        }
      </div> 
      <div className={styles.buttonContainer}>
        <button className={styles.loadMoreButton}>LOAD MORE</button>
      </div> 
    </div>
  )  
}

export default Users