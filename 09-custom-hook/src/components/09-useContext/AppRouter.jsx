import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./screen/AboutScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
