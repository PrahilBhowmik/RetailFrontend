import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import axios (optional, can be removed)

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL; // Use base URL from env variable
  const userId = '6676995122fa28610553d87e';

  // Simulate fetching transactions from database (replace with actual API call)
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${baseUrl}/transactions/${userId}`); // Use template literal and baseUrl (optional)
        const data = response.data;
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, [baseUrl]); // Update useEffect if baseUrl changes

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total}</td>
              <td>{transaction.type}</td>
              <td>
                <Link
                  to={`/transactions/${transaction.id}`}
                  state={{ transaction }}
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
