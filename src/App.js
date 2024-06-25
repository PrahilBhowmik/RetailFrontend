import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import Navigation component
import Home from './components/Home';  // Import Home component (assuming unchanged)
import Transactions from './components/Transactions'; // Updated name
import Report from './components/Report';
import Details from './components/Details';

const App = () => {
  return (
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/transactions/:id" element={<Details />} /> {/* Detail route */}
          </Routes>
        </div>
      </Router>
  );
};

export default App;
