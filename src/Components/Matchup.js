import React, { Component } from 'react';
import MatchEntry from '../Components/MatchEntry';

class Matchups extends Component {
    state = {  }
    render() {
        return (
            <div className="match-entry">
                <div className="single-side-entry home-team">
                    HOME TEAM: <MatchEntry place="Home" conf={1} />
                    SCORE: <input type="number" min="0" max="10" />
                    <input type="text" placeholder="Goal Scored By :" />
                </div>
                <div className="match-vs"><h2>VS</h2></div>
                <div className="single-side-entry away-team">
                    AWAY TEAM: <MatchEntry place="Away" conf={1} />
                    SCORE: <input type="number" min="0" max="10" />
                    <input type="text" placeholder="Goal Scored By :" />
                </div>
            </div>
          );
    }
}

export default Matchups;
