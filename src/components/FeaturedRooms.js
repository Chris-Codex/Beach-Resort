import React, { Component } from "react";
import { RoomContext } from "../context";
import Loader from "./Loader";
import Room from "../pages/Room";
import Title from "../";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        <Room />
        <Loader />
      </div>
    );
  }
}
