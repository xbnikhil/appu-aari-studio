/**
 * App.jsx — Appu Aari Studio
 * Application root with React Router for client-side navigation.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import OurWork from './pages/OurWork'
import TheProcess from './pages/TheProcess'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="page-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/the-process" element={<TheProcess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
