import React, { Component } from "react";

export default class Welcome extends Component {
  state = {
    Offers: [
      {
        title: "ULTIMATE MALDIVES OFFERS",
        subtitle: "Best available rates and exclusive benefits",
        desc: "We have created bountiful offers for your escape to Ultimate Maldives, to discover our blissful island, with generous inclusions and reduced rates. Book direct on our website for the best available rates and exclusive benefits. Get in touch with us at ultimate@maldives.com to customize your holiday at Ultimate Maldives. Ultimate Maldives can also give you the best quality service you desire.",
      },
    ],
  };
  render() {
    return (
      <section className="section-centers">
        {this.state.Offers.map((offer, index) => {
          return (
            <article className="section-offer" key={index}>
              <h3>{offer.title}</h3>
              <h6>{offer.subtitle}</h6>
              <p>{offer.desc}</p>
            </article>
          );
        })}
      </section>
    );
  }
}
