import React, { Component } from "react";
import League from "../data/team-owners";

class LeagueTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr className="homeLTHeaders">
            <th>Player</th>
            <th>Club</th>
            <th>CLub League</th>
            <th>Division</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>PTS</th>
          </tr>
          {League.map((team, index) => (
            <tr key={index} className="HomeTeams">
              <th>{team.owner}</th>
              <th>{team.club}</th>
              <th>{team.league}</th>
              <th>{`Conference ${team.conf}`}</th>
              <th>{team.record.w}</th>
              <th>{team.record.l}</th>
              <th>{team.record.d}</th>
              <th>{team.points}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default LeagueTable;
