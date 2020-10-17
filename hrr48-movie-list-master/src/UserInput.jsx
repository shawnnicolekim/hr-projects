import React from 'react';

var UserInput = ({handleUserKeyPress, handleUserSubmit}) => {
  return (
    <div className="userBar">
      <input
        type="text"
        className="userInput"
        onKeyPress={(event) => handleUserKeyPress(event)}
      />
      <button
        type="button"
        className="userInputButton"
        onClick={(event) => {
          handleUserSubmit(event);
        }}
      >Add This Movie</button>
    </div>
  );
}

export default UserInput