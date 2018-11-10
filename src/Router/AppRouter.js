import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeagueTable from "../Components/League";
import MatchUp from "../Components/Matchup";
import Header from "../Components/Header";

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <div className="container-fluid">
      <Switch>
        <Route exact={true} path="/" component={LeagueTable} />
        <Route path="/add-match" component={MatchUp} />
      </Switch>
    </div>
  </div>
  </BrowserRouter>
);
export default AppRouter;
