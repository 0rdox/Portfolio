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
      <div className="relative bg-primary z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
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
