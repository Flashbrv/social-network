import React, { useEffect } from 'react'
import { withParams } from './../../hoc/withParams'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserData } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


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

export default compose(
  connect(mapStateToProps, {getUserData}),
  withParams,
  withAuthRedirect
)(ProfileContainer)