import './style/App.scss';
import Logo from './components/Logo';
import NavBar from './components/Nav';
import Error404 from './components/Error404.jsx';
import './style/_header.scss';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import About from './components/About';
import FicheLogement from './components/FicheLogement';
import { Routes, Route } from 'react-router-dom';
import {useLocation} from "react-router-dom"

function App() {
  return (
    <div className="main-wrapper">
      <header>
        <Logo />
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
