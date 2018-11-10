import React, { Component } from "react";
import Select from "react-select";
import League from "../data/team-owners";

class MatchEntry extends Component {
  state = {
    selectedOption: null,
    place:this.props.place,
    clubs: []
  };

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
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
      <Select
        className="match-dropdown"
        placeholder={`Select the ${this.props.place} Team`}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={this.state.clubs}
      />
    );
  }
}
MatchEntry.defaultProps = {
    conf : 1,
    place: 'a place in the universe'
}
export default MatchEntry;
