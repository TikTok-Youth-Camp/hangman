import React from 'react'

const Notification = ({ attempted }) => {
  return (
    <div className={`notification ${attempted ? 'show' : ''}`}>
      <p>You have attempted this letter before! :O </p>
    </div>
  )
}

export default Notification