import React from 'react'
import StoreContext from '../../../StoreContext'
import FriendsOnline from './FriendsOnline'

const FriendsOnlineContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let friendsOnline = store.getState().sidebar.friendsOnline
          return (
            <FriendsOnline friendsOnline={friendsOnline} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default FriendsOnlineContainer