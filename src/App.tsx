import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter basename="/homepage">
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
