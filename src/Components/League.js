import React, { Component } from "react";
import League from "../data/team-owners";

class LeagueTable extends Component {
  state = {
    localLeague: [],
    leagueLoaded:false,
    firstConf: true,

  };
  componentDidMount() {
    if (!this.state.leagueLoaded) {
      this.setState({
        localLeague: this.state.localLeague.concat(League) ,
        leagueLoaded: true
      });
    }
  }
  confChange = () => {
    console.log("click on that bitch");
    this.setState(prevState => {
      return {
        localLeague: confSort(prevState.localLeague),
        firstConf: !prevState.activeConf,
      };
    });
    const confSort = table => {
      console.log(table);
      if (this.state.activeConf) {
        table.sort((a, b) => {
          return a.conf > b.conf ? 1 : -1;
        });
      } else {
        table.sort((a, b) => {
          return a.conf < b.conf ? 1 : -1;
        });
      }
    };
  };
  render() {
    return (
      <div className="row">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="homeLTHeaders">
              <th>Player</th>
              <th>Club</th>
              <th className="d-none d-lg-block">CLub League</th>
              <th onClick={this.confChange}>Division</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.localLeague.map((team, index) => (
              <tr key={index} className="HomeTeams">
                <th>@{team.owner}</th>
                <th>{team.club}</th>
                <th className="d-none d-lg-block">{team.league}</th>
                <th>{`Conference ${team.conf}`}</th>
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

export default LeagueTable;
