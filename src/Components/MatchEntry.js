import React, { Component } from "react";
import Select from "react-select";
import League from "../data/team-owners";

class MatchEntry extends Component {
  state = {
    selectedOption: null,
    place: this.props.place,
    clubs: []
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleInfo(selectedOption.label, this.props.place);
  };

  componentDidMount() {
    const conference = League.filter(team => team.conf === this.props.conf);
    const clubs = conference.map(team => ({
      value: team.club,
      label: team.club
    }));
    this.setState({
      clubs: this.state.clubs.concat(clubs)
    });
  }
  render() {
    return (

        <div className="col-sm-12">
          <div className="row">
            <div className="col">
              <h3>{this.props.place} TEAM:</h3>
            </div>
            <Select
              className="match-dropdown col-sm-12 col-md-6"
              placeholder={`${this.props.place} Team`}
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={this.state.clubs}
            />

          </div>
        </div>
    );
  }
}
MatchEntry.defaultProps = {
  conf: 1,
  place: "a place in the universe"
};
export default MatchEntry;
