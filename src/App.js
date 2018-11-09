import React, { Component } from "react";
import MatchEntry from './Components/Matchups';
// import League from './Components/League';
// import Conference from "./Components/Conference";
import "./App.css";


// <League/>
// <Conference conf={1} />

class App extends Component {
  render() {
    return (
      <div className="App">
      <MatchEntry/>
      </div>
    );
  }
}

export default App;
