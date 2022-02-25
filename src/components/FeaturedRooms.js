import React, { Component } from "react";
import { RoomContext } from "../context";
import Loader from "./Loader";
import Rooms from "../pages/Rooms";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    console.log(rooms);

    rooms = rooms.map((item) => {
      return <Rooms key={item.id} room={item} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loader /> : rooms}
        </div>
      </section>
    );
  }
}
