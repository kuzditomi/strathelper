import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Finder />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
