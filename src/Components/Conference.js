import React, { Component } from "react";
import League from "../data/team-owners";

class Conference1 extends Component {
  state = {};
  render() {
    const conference = League.filter(team => team.conf === this.props.conf);
    return (
      <div className="confWrap">
        <h1>Conference {this.props.conf} Table</h1>
        <table>
          <tbody>
            <tr className="conference">
              <th>Player</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>PTS</th>
            </tr>
            {conference.map((team, index) => (
              <tr key={index}>
                <th>
                  <p>
                    {`@${team.owner}`}: <strong>{team.club}</strong>
                  </p>
                </th>
                <th>{team.record.w}</th>
                <th>{team.record.l}</th>
                <th>{team.record.d}</th>
                <th>{team.points}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Conference1;
