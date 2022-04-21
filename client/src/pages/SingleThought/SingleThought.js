import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../../utils/queries.js';
import ReactionList from '../../components/ReactionList/ReactionList.js';
import Auth from '../../utils/auth.js';
import ReactionForm from '../../components/ReactionForm/ReactionForm.js';
import "./singleThought.css";


const SingleThought = props => {

  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singlethought">
      <div className="thought-card">
        <p className="thought-header">

        <div className="thought-body">
          <p>{thought.thoughtText}</p>
        </div>

        <div className="thought-date">
        
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{' '}
          posted {thought.createdAt}</div>
        </p>
        
      </div>
      <div className="comment">
        {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
        {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />}
      </div>
    </div>
  );
};

export default SingleThought;