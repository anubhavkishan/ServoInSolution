import React from 'react';
import Data from "../../data/data.json"

const Team = () => {
    const [, teams] = Data;

    return (
        <section className="home-team-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Team Members</span>
                    <h2>People Who are Behind the Achievements</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>
                <div className="home-team-slider owl-carousel owl-theme">

                    {teams.teams.map((team) => {
                        return (
                            <div className="single-team" key={team.id}>
                                <div className="team-img">
                                    <img src={team.image} alt="team" />
                                </div>
                                <div className="content text-center">
                                    <h3>{team.name}</h3>
                                    <p>{team.designation}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default Team