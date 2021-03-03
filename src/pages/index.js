import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";

import Services from "../components/Services";
import Footer from "../components/Footer";
import Trainings from "../components/Trainings";

import { objContact } from "../components/Contact/DataContact";
import Contact from "../components/Contact";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Trainings />
      <Contact {...objContact} />
      <Footer />
    </>
  );
};

export default Home;
