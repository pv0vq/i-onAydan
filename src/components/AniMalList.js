import React from "react";
import {Link} from "react-router-dom";

const AniMalList = ({user}) => { // 동물 리스트 컴포넌트

  return(
      <div>
        {user.map(user => {
          return (
              <div className="card mb-2" key={user.animalId}>
                <div className="card-body p-3">
                    <Link to={ `/ani/${user.animalId}`}>{user.name}</Link>
                </div>
              </div>);
        })}
      <br/>
          <br/>
          <Link to='/ani/write'>글쓰기</Link>
      </div>
  );
};
export default AniMalList;