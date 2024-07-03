// import React from "react";
// import { Navbar } from "./Componant/Navbar/Navbar";
// import { Banner } from "./Componant/banner/Banner";
// import { Projects } from "./Componant/projects/Projects";
// import { Resume } from "./Componant/resume/Resume";


// function App() {
//   return (
//     <div className="w-full h-auto bg-bodyColor text-lightText">
//       <div className="max-w-screen-2xl mx-auto px-16">
//         <Navbar />
//         <Banner />
//         <Projects />
//         <Resume />
//       </div>

//     </div>
//   );
// }

// export default App;


import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./Componant/Navbar/Navbar";
import { Banner } from "./Componant/banner/Banner";
import { Projects } from "./Componant/projects/Projects";
import { Resume } from "./Componant/resume/Resume";
import { Contact } from "./Componant/Contact/Contact";
import { Footer } from "./Componant/Footer/Footer";
import FooterBottom from "./Componant/Footer/FooterBottom";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-screen 1xl mx-auto px-16">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/home" element={<Banner />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FooterBottom />
        </div>

      </BrowserRouter>


    </div>
  );
}

export default App;
