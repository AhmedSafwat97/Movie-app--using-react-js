import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import Highrate from "./Componant/Highrate/Highrate";
import Bestmovies from "./Componant/BestMovies/Bestmovies";
import Drama from "./Componant/categories/Drama";
import Kids from "./Componant/categories/Kids";
import Comedian from "./Componant/categories/Comedian";
import Science from "./Componant/categories/Science";
import Moviedetails from "./Componant/Moviedetails/Moviedetails";
import Footer from "./Componant/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/highrate" exact element={<Highrate />} />
          <Route path="/bestmovies" exact element={<Bestmovies />} />
          <Route path="/drama" exact element={<Drama />} />
          <Route path="/kids" exact element={<Kids />} />
          <Route path="/comedia" exact element={<Comedian />} />
          <Route path="/science" exact element={<Science />} />
          <Route path="/details/:id" exact element={<Moviedetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
