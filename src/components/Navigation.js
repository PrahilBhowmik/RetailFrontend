import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/" style={{paddingLeft:"10px"}}>Retail Manager</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/add_transaction" className="nav-link active">Add New Transaction</Link>
          </li>
          <li className="nav-item">
            <Link to="/transactions" className="nav-link active">View Transactions</Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link active">Reports</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
