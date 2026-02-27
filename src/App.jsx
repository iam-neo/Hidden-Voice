import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Story1 from './pages/Story1';
import Story2 from './pages/Story2';
import Story3 from './pages/Story3';
import Story4 from './pages/Story4';

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col bg-cream text-ink transition-colors duration-300">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/story/1" element={<Story1 />} />
            <Route path="/story/2" element={<Story2 />} />
            <Route path="/story/3" element={<Story3 />} />
            <Route path="/story/4" element={<Story4 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
