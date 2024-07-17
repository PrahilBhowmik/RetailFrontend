import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Report from './components/Report';
import Details from './components/Details';
import AddTransactionForm from './components/AddTransactionForm'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <div style={{padding: "10px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/transactions/:id" element={<Details />} />
            <Route path="/add_transaction" element={<AddTransactionForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
