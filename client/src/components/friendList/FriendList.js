import React from 'react';
import { Link } from 'react-router-dom';
import "./friendList.css";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, Let's make some friends!</p>;
  }

  return (
    <div className="freindList">

      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button className="friend-btn" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;