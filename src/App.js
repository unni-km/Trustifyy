import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import InsurancePromo from './components/InsurancePromo';

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">   {/* push content below fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<InsurancePromo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
