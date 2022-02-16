import "./style/App.scss";
import Logo from "./components/Logo";
import NavBar from "./components/Nav";
import Banner from "./components/Banner";
import homeBanner from "./images/banBack.png";
import Error404 from "./components/Error404.jsx";
import "./style/_header.scss";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import FicheLogement from "./components/FicheLogement";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-wrapper">
      <header>
        <Logo />
        <NavBar />
      </header>
      <div className="post-header">
        <Routes>
          <Route
            path="/"
            element={
              <Banner homeBan={homeBanner} slogan="Chez vous, partout et ailleurs" />
            }
          />
        </Routes>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/logement/:logementId" element={<FicheLogement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
