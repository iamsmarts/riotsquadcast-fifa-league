import React, { Component } from "react";
import Owners from "../data/team-owners";

class League extends Component {
  state = { teams: Owners };
  render() {
    return (
        <table>
            <tbody>
            <tr className="homeLTHeaders">
                <th>Player</th>
                <th>Club</th>
                <th>CLub League</th>
                <th>Division</th>
            </tr>
        {Owners.map((team, index) => (
            <tr key={index} className="HomeTeams">
                <th>{team.owner}</th>
                <th>{team.club}</th>
                <th>{team.league}</th>
                <th>{`Conference ${team.conf}`}</th>
            </tr>
        ))}
        </tbody>
        </table>
    );
  }
}

export default League;
