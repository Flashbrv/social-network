import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
      if (!props.isLogedin) {
        navigate('/login')
      }
    }, [props.isLogedin]) 
    
    return <Component {...props} />
  }

  const mapStateToProps = (state) => ({
    isLogedin: state.auth.isLogedin
  })
  
  return connect(mapStateToProps)(RedirectComponent)
}
