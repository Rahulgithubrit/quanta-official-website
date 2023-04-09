import React, { Suspense } from "react";
import Zealicon from "./pages/Zealicon.jsx";
import { Routes, Route } from "react-router-dom";
const Resources = React.lazy(() => import("./pages/Resources.js"));
const Landing = React.lazy(() => import("./pages/Landing.js"));
const Projects = React.lazy(() => import("./pages/Projects.js"));
const Team = React.lazy(() => import("./pages/Team.js"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/zealicon" element={<Zealicon />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
