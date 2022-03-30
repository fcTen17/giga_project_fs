import React from 'react'
import './user-card.scss';

const UserCard = (props) => {

  const {
    userIndexId,
    userNameTitle,
    userNameFirst,
    userNameLast,
    userEmail,
    userAttachedImageURL
  } = props

  return (
    <div className="user-card-wrapper col-12 col-md-6 mb-4" key={userIndexId} id={userIndexId}>
      <div className="user-card p-3 border bg-light">
        <div className="image-box">
          <img src={userAttachedImageURL}></img>
        </div>
        <div className="user-name-email-box m-auto pt-3">
          <div className="user-name">
            <p>{userNameTitle} {userNameFirst} {userNameLast}</p>
          </div>
          <div className="user-email">
            <a href="#"><p>{userEmail}</p></a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UserCard;