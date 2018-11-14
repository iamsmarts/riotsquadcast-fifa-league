import React from "react";
const Scorebox = ({ handleScore, place, score }) => {
  const sendScore = e => {
    handleScore(place, e.target.value);
  };
  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col">
          <h3>{place} SCORE:</h3>
        </div>
        <div className="col-sm-12 col-md-6">
          <input type="number" min="0" max="10" value={score} onChange={sendScore} />
        </div>
      </div>
    </div>

  );
};
export default Scorebox;


