  
import React from 'react';
import UserCard from './user-card';
import { Collapsible , CollapsibleItem } from 'react-materialize';


const UserCardList = props => {
  const { userData } = props;
  return (
    <Collapsible accordion>
      {userData.length > 0 ? (
        userData.map((user,index) => (
            <CollapsibleItem 
                key={index}
                expanded={false}
                header={user.name.first} 
                
                node="div"
            >
                <UserCard user={user}/>
            </CollapsibleItem>
        ))
      ) : (
        <li>No User Data</li>
      )}
    </Collapsible>
  );
};

export default UserCardList;