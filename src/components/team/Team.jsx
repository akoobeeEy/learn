import { Component } from "react";
import "./Team.scss";
import { CardTeam, Button } from "../index";
import { teamData } from "../../data/team";
export class Team extends Component {
  render() {
    return (
      <section className="mt-32 team-wrapper" id="команда">
        <div className="container mx-auto">
          <h1 className="title">
            Наша <span>команда</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamData.map((el, i) => (
              <CardTeam key={i}>
                {el.image}
                {el.firstName}
                {el.lastName}
                {el.desc}
                {el.tel}
                {el.phone}
                {el.email}
              </CardTeam>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button>Все новости</Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
