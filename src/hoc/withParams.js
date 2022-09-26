import React from 'react'
import { useParams } from 'react-router'

export const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />
}