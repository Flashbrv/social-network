import React from 'react'
import User from './User/User'
import styles from './Users.module.css'
import * as axios from 'axios'
import defaultUserImage from './../../assets/images/user.png'

class Users extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:8080/api/users').then(response => {
        this.props.setUsers(response.data)
      })
  }


  render() {
    return (
      <div className={styles.usersContainer}>
        <h2 className={styles.title}>Список користувачів</h2>
        <div className={styles.usersList}>
          { this.props.users.map(u => {
              return (
                <User key={u.id} 
                      id={u.id}
                      avaPath={u.avaPath ? u.avaPath : defaultUserImage} 
                      followed={u.followed} 
                      fullName={u.fullName}
                      aboutMe={u.aboutText} 
                      location={u.location} 
                      follow={this.props.follow}
                      unfollow={this.props.unfollow} />
              )}) 
          }
        </div> 
        <div className={styles.buttonContainer}>
          <button className={styles.loadMoreButton}>LOAD MORE</button>
        </div> 
      </div>
    )
  }

  
}

export default Users