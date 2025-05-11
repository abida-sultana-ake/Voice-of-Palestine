import React from "react";
import Stories from "./Stories";
import Banner from "./Banner";
import CounterScroll from "./CounterScroll";
import Donation from "./Donation";

const Home = () => {
  return (
    <div>
      <section className="relative w-full">
       <Banner></Banner>
      </section>

      <section className="relative w-full">
        <Stories></Stories>
      </section>

      <section className="relative w-full">
        <Donation></Donation>
      </section>

      <section className="relative w-full">
        <CounterScroll></CounterScroll>
      </section>
    </div>
  );
};

export default Home;
