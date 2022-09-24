import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserData } from '../../redux/profileReducer'


const ProfileContainer = (props) => {    
  useEffect(() => {
    props.getUserData(props.params.userId)
  }, [])

  return <Profile userProfile={props.userProfile} isFetching={props.isFetching} />
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  isFetching: state.profilePage.isFetching
})

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />
}

export default connect(mapStateToProps, {getUserData})(withParams(ProfileContainer))