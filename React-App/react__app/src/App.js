import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./components/pages/auth/Authorization";
import Registration from "./components/pages/reg/Registration";
import Interests from "./components/pages/interests/Interest";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/pages/map/map";
import Tinder from "./components/pages/tinder/Tinder";
import AddSob from "./components/pages/Addsob/AddSob";
import Favorites from "./components/pages/favorites/favorites";
import Fishka from "./components/pages/fishka/fishka";
function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Routes>
          <Route path="/HomePage" element={<Map />} />
          <Route path="/" element={<Authorization />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Tinder" element={<Tinder />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Fishka" element={<Fishka />} />
          <Route path="/AddSob" element={<AddSob />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
