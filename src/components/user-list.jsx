  
import React from 'react';
import UserCard from './user-card';


const UserCardList = props => {
  const { userData } = props;
  return (
    <ul className="UserCardList">
      {userData.length > 0 ? (
        userData.map((user,index) => (
          <li className="ProfileCard" key={index}>
            <UserCard user={user}/>
          </li>
        ))
      ) : (
        <li>No User Data</li>
      )}
    </ul>
  );
};

export default UserCardList;