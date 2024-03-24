import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router';
import Home from "./components/Home";
import Tienda from "./components/Tienda";
import Producto from "./components/Producto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tienda/:id">
          <Tienda />
        </Route>
        <Route path="/producto/:id">
          <Producto />
        </Route>
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;