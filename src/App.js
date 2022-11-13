import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
const Resources = React.lazy(() => import("./Pages/Resources"));
const Landing = React.lazy(() => import("./Pages/Landing"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const Team = React.lazy(() => import("./Pages/Team"));

function App() {
  return (
    <Suspense>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
