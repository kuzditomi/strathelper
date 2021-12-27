import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { CalculatorPage } from './calculator/Calculator.component';
import { Strategies } from './strategies/Strategies.component';
import { Menu } from './menu/menu';
import { Finder } from './finder/Finder.component';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/strathelper">
        <Menu />
        <Routes>
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/finder/" element={<Finder />} />
          <Route path="/strats/:id" element={<Strategies />} />
          <Route path="/strats/" element={<Strategies />} />
          <Route path="/" element={<Navigate to="/strats" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
