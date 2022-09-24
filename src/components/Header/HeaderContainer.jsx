import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { loginUser, logoutUser } from '../../redux/authReducer'

const HeaderContainer = (props) => {
  useEffect(() => {
      props.loginUser('roman.belnitskiy@example.mail.com', '1')
  }, [])

  return (
    <Header login={props.login} isLogedin={props.isLogedin} logoutUser={props.logoutUser}/>
  )  
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isLogedin: state.auth.isLogedin
})

export default connect(mapStateToProps, {loginUser, logoutUser})(HeaderContainer)