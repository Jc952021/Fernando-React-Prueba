import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardRouter from "./modules/Dashboard/DashBoardRouter";
import DcDashScreen from "./modules/Dc/screens/DcDashboard/DcDashScreen";
import HeroesDashScreen from "./modules/Heroes/Screen/HeroesDashBoard/HeroesDashScreen";
import LoginScreen from "./modules/Login/screens/login/LoginScreen";
import MarvelScreen from "./modules/Marvel/screens/marvel/MarvelScreen";
import SearchDashScreen from "./modules/search/screens/SearchDashScreen";
import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";


const AppRouter = () => {
  return (
  <Router>
    <Routes>
        <Route path="/login" element={<RutaPublica><LoginScreen /></RutaPublica> } />

        <Route path="/" element={<RutaPrivada><DashBoardRouter/></RutaPrivada>}>
          <Route path='marvel' element={<MarvelScreen/>} />
          <Route path='search' element={<SearchDashScreen/>} />
          <Route path='hero/:heroId' element={<HeroesDashScreen/>} />
          <Route path='dc' element={<DcDashScreen/>} />
          <Route index element={<DcDashScreen/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
    </Routes>
  </Router>
  );
};

export default AppRouter;
