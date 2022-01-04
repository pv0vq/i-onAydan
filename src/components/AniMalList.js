import React from "react";
import {Link} from "react-router-dom";

const AniMalList = ({user}) => { // 동물 리스트 컴포넌트
  console.log(user);
  return(
      <div>
        {user.map(user => {
          return (
              <div className="card mb-2" key={user.animal_ID}>
                <div className="card-body p-3">
                    <Link to={ `/ani/${user.animal_ID}`}>{user.name}</Link>
                </div>
              </div>);
        })}

      </div>
  );
};
export default AniMalList;