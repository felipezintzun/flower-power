import React from 'react';
import { Link } from 'react-router-dom';
import "./reactionList.css";

const ReactionList = ({ reactions }) => {
  return (
      
    <div className="card mb-3">
    <div className="card-header">
      <span className="header">Reactions</span>
    </div>
    <div className="card-body">
      {reactions &&
        reactions.map(reaction => (
          <p className="pill mb-3" key={reaction._id}>
            {reaction.reactionBody} {'// '}
            <Link className='User-info' to={`/profile/${reaction.username}`} style={{ fontWeight: 1 }}>
              {reaction.username} on {reaction.createdAt}
            </Link>
          </p>
        ))}
    </div>
  </div>
  );
};

export default ReactionList;