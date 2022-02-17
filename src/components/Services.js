import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaAccusoft, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking ",
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        icon: <FaAccusoft />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="service-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <span className="servicespan">{item.title}</span>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
