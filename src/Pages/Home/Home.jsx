import React from "react";
import Stories from "./Stories";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <section className="relative w-full">
       <Banner></Banner>
      </section>

      <section className="relative w-full">
        <Stories></Stories>
      </section>
    </div>
  );
};

export default Home;
