import React, { Component } from 'react';
import Select from 'react-select';
import League from "../data/team-owners";


class MatchEntry extends Component {
    state = {
        selectedHomeOption:null,
        selectedAwayOption: null,
        clubs:[],
    }
    handleChange = (e, where) =>{
        console.log(e, where);
    }
    componentDidMount(){
        let conference = null;
        if (this.props.conf) {
            conference = League.filter(team => team.conf === this.props.conf);
        }else{
            conference = League.filter(team => team.conf === 1);
        }
        const clubs = conference.map(team => (
            { value: team.club, label: team.club }
        ));
        console.log(Array.isArray(clubs));
        this.setState((state)=> clubs: [...this.state.clubs, clubs]);
    }
    render() {
        return (
            <Select
                className="match-dropdown"
                value="Home"
                onChange={(e) => this.handleChange(e, 'Home')}
                options={this.state.clubs}
            />
          );
    }
}

export default MatchEntry;