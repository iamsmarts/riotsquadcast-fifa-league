import React from 'react';
const Home = () => (
    <div className="wrap">
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">RiotSquad Fifa 19 <br/>Season 1</h1>
                <h2>Rules:</h2>
                <ul className="list-group">
                    <li className="list-group-item">26 teams, 2 divisions of 13, top 6 make playoffs</li>
                    <li className="list-group-item">play division team 2x</li>
                    <li className="list-group-item">tie breaker order: Goals differential, goals scored, head to head</li>
                    <li className="list-group-item">Teams available: portuguese, dutch and turkish league</li>
                    <li className="list-group-item">5 min halfs</li>
                    <li className="list-group-item">semi-auto settings</li>
                    <li className="list-group-item">home adds scores, goal scorers, regardless of result</li>
                </ul>
            </div>
        </div>
        <div className="row home-results">
            <div className="col-sm-12 col-md-6">
                <h3 className="text-center">Recent Matches</h3>
            </div>
            <div className="col-sm-12 col-md-6">
                <h3 className="text-center">Top Goal Scorers</h3>
            </div>
        </div>
    </div>
);
export default Home;