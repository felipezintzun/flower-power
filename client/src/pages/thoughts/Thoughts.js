import React from 'react';
import "./thoughts.css";
import { useQuery } from '@apollo/client';
import ThoughtList from '../../components/thoughtList/ThoughtList.js';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../../utils/queries.js';
import Auth from '../../utils/auth.js';
import FriendList from '../../components/friendList/FriendList.js';
import ThoughtForm from '../../components/ThoughtForm/ThoughtForm.js';


const Thoughts = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();


  return (

    <main>

    <div className="thoughts">

      <div className="thought-f-main">
        {loggedIn && (
              <div className="thought-f">
                <ThoughtForm />
              </div>
            )}
            <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (

            
            <div className="thought-li">
            <ThoughtList className="fl-tlk-title" thoughts={thoughts} title="Join The Flower Talk" />

              <div className="friend-list">
                {loggedIn && userData ? (
                  <div className="friends">
                    <FriendList
                      username={userData.me.username}
                      friendCount={userData.me.friendCount}
                      friends={userData.me.friends}
                    />
                  </div>
                ) : null}
                
            </div>

            </div>
          )}

        </div>
        </div>




      </div>
    </main>

  );
};

export default Thoughts;