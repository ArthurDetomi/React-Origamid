import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import PaginaNotFound from "./components/PaginaNotFound";
import Header from "./components/Header";
import Login from "./components/Login";
import Produto from "./components/rotadinamica/Produto";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<PaginaNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
