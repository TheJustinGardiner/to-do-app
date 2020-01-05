import React from 'react';


const UserOutput = (props) => {


    return (
      <div className="UserOutput">
        <p onClick={props.check}><span>{props.task}</span></p>
      </div>
    );
  
}

export default UserOutput;