import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import { Finder } from './finder/finder.component';
import { Menu } from './menu';

function App() {

  return (
    <div className="app">
      <BrowserRouter basename="/strathelper">
        <Menu />
        <Routes>
          <Route path="/calculator" element={<p>hello</p>} />
          <Route path="/strats/:id" element={<Finder />} />
          <Route path="/strats/" element={<Finder />} />
          <Route path="/" element={<Navigate to="/strats" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
