import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./views/pages/Home/Home";
import {Header} from "./views/components/Header/Header";
import {SectionOne} from "./views/pages/SectionOne/SectionOne";
import {SectionTwo} from "./views/pages/SectionTwo/SectionTwo";
import {SectionThree} from "./views/pages/SectionThree/SectionThree";
import {SectionFour} from "./views/components/SectionFour/SectionFour";
import {SectionFIve} from "./views/pages/SectionFIve/SectionFIve";
import {SectionSix} from "./views/pages/SectionSix/SectionSix";
import {Footer} from "./views/components/Footer/Footer";

function App() {
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <SectionOne/>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFIve></SectionFIve>
        <SectionSix></SectionSix>
        <Footer></Footer>
    </div>
  );
}

export default App;
