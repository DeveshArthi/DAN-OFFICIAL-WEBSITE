import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './components/Home';
import Careers from './pages/details/Careers';
import Services_dt from './pages/details/Services_dt';
import Contact_dt from './pages/details/Contact_dt';



export default function App() {
  const [theme, setTheme] = useState(
  () => localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
);

useEffect(() => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}, [theme]);
  return (
    <>
     <Nav theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services_dt />} />
        <Route path="/contact" element={<Contact_dt />} />
      </Routes>
    </>
  );
}