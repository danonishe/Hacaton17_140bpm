import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Authorization from "./components/pages/auth/Authorization";
import "bootstrap/dist/css/bootstrap.css";
import Interests from "./components/pages/interests";
function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Authorization" element={<Authorization />} />
          <Route path="/Interests" element={<Interests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
