import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { CalculatorPage } from './calculator/Calculator.component';
import { Finder } from './finder/finder.component';
import { Menu } from './menu/menu';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/strathelper">
        <Menu />
        <Routes>
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/strats/:id" element={<Finder />} />
          <Route path="/strats/" element={<Finder />} />
          <Route path="/" element={<Navigate to="/strats" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
