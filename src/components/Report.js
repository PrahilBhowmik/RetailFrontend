import React, { useState } from 'react';
import axios from 'axios';

function Report() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [fromDateDisplayed, setFromDateDisplayed] = useState('');
  const [toDateDisplayed, setToDisplayed] = useState('');
  const [report, setReport] = useState(null);

  const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let uri = `${baseUrl}/report/from=${fromDate.toISOString()}/to=${toDate.toISOString()}`;
      const instance = axios.create({
        withCredentials: true
      });
      const response = await instance.get(uri);
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };
  
  return (
    <div>
    <h2>Report Generator</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="fromDate">From Date:</label>
    <input type="date" id="fromDate" 
    value={fromDateDisplayed} onChange={(e) => {setFromDate(new Date(e.target.value));setFromDateDisplayed(e.target.value)}} />
    <label htmlFor="toDate">To Date:</label>
    <input type="date" id="toDate"  
    value={toDateDisplayed} onChange={(e) => {setToDate(new Date(e.target.value));setToDisplayed(e.target.value)}} />
    <button type="submit">Generate Report</button>
    </form>
    
    {report && (
      <div>
      <h2>Report Details</h2>
      <p>From {report.fromDate} to {report.toDate}</p>
      <p>User ID: {report.userId}</p>
      <p>Status: {report.status}</p>
      <p>Amount: {report.profitOrLossAmount}</p>
      <p>Income: {report.income}</p>
      <p>Expenditure: {report.expenditure}</p>
      <h3>Top Brands</h3>
      <ul>
      {Object.entries(report.topBrands).map(([brand, amount]) => (
        <li key={brand}>
        {brand}: {amount}
        </li>
      ))}
      </ul>
      <h3>Top Categories</h3>
      <ul>
      {Object.entries(report.topCategories).map(([category, amount]) => (
        <li key={category}>
        {category}: {amount}
        </li>
      ))}
      </ul>
      <p>Total Buy: {report.totalBuy}</p>
      <p>Total Sell: {report.totalSell}</p>
      <p>Total Buy Returned: {report.totalBuyReturned}</p>
      <p>Total Sell Returned: {report.totalSellReturned}</p>
      <p>Total Dispose: {report.totalDispose}</p>
      </div>
    )}
    </div>
  );
}

export default Report;