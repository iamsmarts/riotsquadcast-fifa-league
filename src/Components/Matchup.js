import React, { Component } from "react";
import MatchEntry from "../Components/MatchEntry";
import Scorebox from "../Components/Scorebox";
import Scorers from "../Components/Scorers";

class Matchups extends Component {
  state = {
    readySubmit: false,
    displayBoard: false,
    home: {
      team: null,
      score: 0,
      scorers: []
    },
    away: {
      team: null,
      score: 0,
      scorers: []
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

  handleScorers = (goals, place) => {
    console.log(goals, place);
    this.setGoalScorers(goals,place);
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
  setGoalScorers = (goals, place) =>{
      switch (place) {
          case "Away":
              this.setState(prevState => {
                  return {
                      away: {
                          team: prevState.away.team,
                          score: prevState.away.score,
                          scorers: prevState.away.scorers.concat(goals)
                      }
                  };
              });
              break;
          case "Home":
              this.setState(prevState => {
                  return {
                      home: {
                          team: prevState.home.team,
                          score: prevState.home.score,
                          scorers: prevState.home.scorers.concat(goals)
                      }
                  };
              });
              break;

          default:
              break;
      }
  }
  componentDidUpdate() {
    if (!this.state.displayBoard) {
        if (this.state.home.team !== null && this.state.away.team !== null) {
            this.setState({displayBoard:true});
            return;
        }
    }
  }
  render() {
    return (
      <div className="match-entry row">
        <div className="single-side-entry home-team col-sm-12 col-lg-5">
          <div className="row">
            <MatchEntry
                place="Home"
                conf={1}
                handleInfo={this.handleSideInfo}
            />
            <Scorebox
                place="Home"
                handleScore={this.handleScore}
                hScore={this.state.home.score}
            />
          </div>
          <Scorers place="Home" scoreList={this.state.home.scorers} handleScorers={this.handleScorers} />
        </div>

        <div className="match-vs col-sm-12 col-lg-2 align-items-center">
          <h3>VS</h3>
        </div>

        <div className="single-side-entry away-team col-sm-12 col-lg-5">
          <div className="row">
            <MatchEntry
                place="Away"
                conf={1}
                handleInfo={this.handleSideInfo}
            />
            <Scorebox
                place="Away"
                handleScore={this.handleScore}
                hScore={this.state.away.score}
            />
          </div>
          <Scorers place="Away" scoreList={this.state.away.scorers} handleScorers={this.handleScorers} />
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

        {this.state.displayBoard && (
          <div className="col-sm-12">
            <div className="row">
                <div className="col-sm-5">
                    <h4>{ `${this.state.home.team} ${this.state.home.score}` }</h4>
                </div>
                <div className="col-sm-2">
                </div>
                <div className="col-sm-5">
                    <h4>{`${this.state.away.team} ${this.state.away.score}`}</h4>
                </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Matchups;
