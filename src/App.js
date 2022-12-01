import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Galerie from './pages/Galerie';
import Kontakt from './pages/Kontakt';
import Speisekarte from './pages/Speisekarte';
import Oeffnungszeiten from './pages/Oeffnungszeiten';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/Galerie' element={<Galerie />}></Route>
          <Route path='/Kontakt' element={<Kontakt />}></Route>
          <Route path='/Öffnungszeiten' element={<Oeffnungszeiten />}></Route>
          <Route path='/Speisekarte' element={<Speisekarte />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
