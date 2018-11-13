import React, { Component } from "react";
import MatchEntry from "../Components/MatchEntry";
import Scorebox from "../Components/Scorebox";
import Scorers from "../Components/Scorers";

class Matchups extends Component {
  state = {
    readySubmit: false,
    home: {
      team: null,
      score: 0,
      scorers: [
        {
          player: "",
          goals: 0
        }
      ]
    },
    away: {
      team: null,
      score: 0,
      scorers: [
        {
          player: "",
          goals: 0
        }
      ]
    }
  };

  handleSideInfo = (team, place) => {
    console.log(team, place);
    this.setTeams(team, place);
  };

  handleScore = (place, score) => {
    console.log(place, score);
    this.setScores(place, score);
  };

  handleScorers = (place, player) => {
    console.log(place, player);
  };
  setTeams = (currentTeam, place) => {
    switch (place) {
      case "Away":
        this.setState(prevState => {
          return {
            away: {
              team: currentTeam,
              score: prevState.away.score,
              scorers: prevState.away.scorers
            }
          };
        });
        break;
      case "Home":
        this.setState(prevState => {
          return {
            home: {
              team: currentTeam,
              score: prevState.home.score,
              scorers: prevState.home.scorers
            }
          };
        });
        break;
      default:
        break;
    }
  };

  setScores = (place, currentScore) => {
    switch (place) {
      case "Away":
        this.setState(prevState => {
          return {
            away: {
              team: prevState.away.team,
              score: currentScore,
              scorers: prevState.away.scorers
            }
          };
        });
        break;
      case "Home":
        this.setState(prevState => {
          return {
            home: {
              team: prevState.home.team,
              score: currentScore,
              scorers: prevState.home.scorers
            }
          };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="match-entry row">
        <div className="single-side-entry home-team col-sm-12 col-lg-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col">
                  <h3>HOME TEAM:</h3>
                </div>
                <MatchEntry
                  place="Home"
                  conf={1}
                  handleInfo={this.handleSideInfo}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col">
                  <h3>HOME SCORE:</h3>
                </div>
                <div className="col-sm-12 col-md-6">
                  <Scorebox
                    place="Home"
                    handleScore={this.handleScore}
                    hScore={this.state.home.score}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>HOME GOALS BY:</h3>
            </div>
            <Scorers place="Home" handleScorers={this.handleScorers} />
          </div>
        </div>

            <div className="match-vs col-sm-12 col-lg-2 align-items-center">
          <h3>VS</h3>
        </div>

        <div className="single-side-entry away-team col-sm-12 col-lg-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col">
                  <h3>AWAY TEAM:</h3>
                </div>
                <MatchEntry
                  place="Away"
                  conf={1}
                  handleInfo={this.handleSideInfo}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col">
                  <h3>AWAY SCORE:</h3>
                </div>
                <div className="col-sm-12 col-md-6">
                  <Scorebox
                    place="Away"
                    handleScore={this.handleScore}
                    hScore={this.state.away.score}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>AWAY GOALS BY:</h3>
            </div>
            <Scorers place="Home" handleScorers={this.handleScorers} />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.readySubmit}
            >
              Add Match
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Matchups;
