import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const Resources = React.lazy(() => import("./pages/Resources"));
const Landing = React.lazy(() => import("./pages/Landing"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Team = React.lazy(() => import("./pages/Team"));

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
