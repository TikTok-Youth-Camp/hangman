import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Try another letter, you have already entered this letter</p>
    </div>
  )
}

export default Notification