import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import SoftwareEngineering from "./Components/SoftwareEng/SoftwareEngineering";
import Home from "./Components/Home/Home";
import Photography from "./Components/Photography/Photography";
import Contact from "./Components/Contact/ContactSection";
import { display } from "@mui/system";

function App() {
  return (
    <Router>
      <div flex>
        <div className="flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/software-engineering"
                element={<SoftwareEngineering />}
              />
              <Route path="/photography" element={<Photography />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
