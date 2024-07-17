import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Details = () => {
  const transaction = useLocation().state?.transaction; // Access data from state

  if (!transaction) {
    return <p>Loading details...</p>;
  }

  return (
    <div>
      <h2>Transaction Details for ID: {transaction.id}</h2>
      <ul>
        <li>
          <b>User ID:</b> {transaction.userId}
        </li>
        <li>
          <b>Date:</b> {transaction.date}
        </li>
        <li>
          <b>Type:</b> {transaction.type}
        </li>
        <li>
          <b>Total:</b> Rs.{transaction.total}
        </li>
        <li>
          <b>Products:</b>
          <table className="table table-bordered table-primary table-sm table-striped">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>MRP(Rs.)</th>
                <th>Cost(Rs.)</th>
                <th>Discount</th>
                <th>Units</th>
                <th>Brand</th>
                {/* Add more headers as needed based on Product properties */}
              </tr>
            </thead>
            <tbody>
              {transaction.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.mrp}</td>
                  <td>{product.cost}</td>
                  <td>{product.discount * 100}%</td>
                  <td>{product.units}</td>
                  <td>{product.brand}</td>
                  {/* Add more table cells as needed based on Product properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  );
};

export default Details;
