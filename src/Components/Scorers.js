import React, { Component } from "react";

class Scorers extends Component {
  state = {
    scorer: { name: "", goals: 0 },
    scorerError: false
  };

  whoScored = e => {
    this.sErrorCheck();
    let player = e.target.value;
    this.setState(prevState => {
      console.log(prevState);
      return {
        scorer: { name: player, goals: prevState.scorer.goals }
      };
    });
  };
  goalsCount = e => {
    this.sErrorCheck();
    let goal = Math.trunc(e.target.value);
    this.setState(prevState => {
      console.log(prevState);
      return {
        scorer: { name: prevState.scorer.name, goals: goal }
      };
    });
  };
  addScorer = () => {
    if (this.state.scorer.name !== "" && this.state.scorer.goals) {
      this.props.handleScorers(this.state.scorer, this.props.place);
      this.setState(prevState => {
        return {
          scorer: { name: "", goals: 0 }
        };
      });
    } else {
      this.setState({ scorerError: true });
    }
  };
  sErrorCheck = () => {
    if (this.state.scorerError) {
      this.setState({ scorerError: false });
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <h3>{this.props.place} GOALS BY:</h3>
        </div>
        <div className="col-sm-12 col-md-6 scorers-boxes">
          <input
            type="text"
            placeholder="Goal Scored By :"
            value={this.state.scorer.name}
            onChange={this.whoScored}
          />
          <input type="number" min="0" max="10" value={this.state.scorer.goals} onChange={this.goalsCount} />
          <i className="material-icons" onClick={this.addScorer}>
            add
          </i>
          {this.state.scorerError && (
            <p className="text-danger">Add Player and Goals FOO</p>
          )}
          {this.props.scoreList.map((goal, index) => (
            <p key={index}>
              {" "}
              {goal.name} {goal.goals}{" "}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Scorers;
