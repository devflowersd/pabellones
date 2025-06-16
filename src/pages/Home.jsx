import React from "react";
import Headers from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import TopPavilions from "../components/TopPavilions";

const Home = () => {
  return (
    <div>
      <Headers />
      <TopPavilions />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  );
};

export default Home;
