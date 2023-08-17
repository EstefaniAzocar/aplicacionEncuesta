import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preguntas from "./view/preguntas/preguntas";
import Resultados from "./view/Resultados/resultados";
import Home from "./view/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/Resultados" element={<Resultados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;