import React from 'react';
import "./thoughts.css";
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../../utils/queries.js';
import ThoughtList from '../../components/thoughtList/ThoughtList.js';

const Thoughts = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (

    <main>

    <div className="thoughts">

    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">

        {loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
        )}
        
      </div>
    </div>
    </div>

  </main>

  );
};

export default Thoughts;