import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen relative z-0 bg-black ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// Portfolio Project:
// Frontend:
// React.js (react three fiber)     V
// Tailwind                         V
// 	+ daisyUI? / other
// Three.js
// Material UI (component based html)

// Hosting:
// https://vercel.com/

//Home page
//lavalamp background translucent --> moving
