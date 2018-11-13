import React from "react";

const Scorers = ({ place, handleScorers }) => {
  const whoScored = e => {
    let player = e.target.value;
    console.log(player);
  };
  return (
      <div className="col-sm-12 col-md-6 scorers-boxes">
        <input type="text" placeholder="Goal Scored By :" onChange={whoScored} />
        <input type="number" min="0" max="10" />
      </div>
  );
};
export default Scorers;
