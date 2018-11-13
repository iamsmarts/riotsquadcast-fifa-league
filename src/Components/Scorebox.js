import React from "react";
const Scorebox = ({ handleScore, place, score }) => {
  const sendScore = e => {
    handleScore(place, e.target.value);
  };
  return (
    <input type="number" min="0" max="10" value={score} onChange={sendScore} />
  );
};
export default Scorebox;


