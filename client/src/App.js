import './App.css';
import {LandingRoot} from './LandingRoot'
import { MemberPage } from './MemberPage';
import { DashboardPage } from './Dashboard';
import {PortfolioPage} from './Portfolio';
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#1e1e1e";
  document.body.style.margin = "0";

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingRoot/>} />
          <Route exact path="/member" element={<MemberPage/>} />
          <Route exact path="/dashboard" element={<DashboardPage/>} />
          <Route exact path="/portfolio" element={<PortfolioPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
