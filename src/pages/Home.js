import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious room"
          subtitle="deluxe rooms starting at  ₦32,000"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Welcome />
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
