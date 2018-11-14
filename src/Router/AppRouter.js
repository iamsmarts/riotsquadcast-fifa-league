import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import LeagueTable from "../Components/League";
import MatchUp from "../Components/Matchup";
import Conf1 from '../Components/Conf1';
import Conf2 from '../Components/Conf2';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <div className="container-fluid">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/add-match" component={MatchUp} />
        <Route path="/conference-1" component={Conf1} />
        <Route path="/conference-2" component={Conf2} />
      </Switch>
    </div>
    <Footer/>
  </div>
  </BrowserRouter>
);
export default AppRouter;
