import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating chatbot. Under construction. */}
        {/* <ChatBotWindow /> */}
      </div>
    </Router>
  )
}

export default App
