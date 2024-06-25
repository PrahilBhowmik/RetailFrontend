import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = ({ userId }) => {
    userId = '6676995122fa28610553d87e';
  const [username, setUsername] = useState('');
  const [inventory, setInventory] = useState([]);
  const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL; // Access base URL from .env

  // Simulate fetching data from database (replace with actual API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let uri = `${baseUrl}/user/${userId}`;
        console.log(uri);
        const response = await axios.get(uri);
        setUsername(response.data.name);
        setInventory(Object.values(response.data.products));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId]); // Run useEffect only when userId changes

  return (
    <div>
      <h1>Homepage of {username}</h1>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>MRP</th>
            <th>Cost</th>
            <th>Discount</th>
            <th>Units</th>
            <th>Brand</th>
            {/* Add more headers as needed based on Product properties */}
          </tr>
        </thead>
        <tbody>
          {inventory.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.mrp}</td>
              <td>{product.cost}</td>
              <td>{product.discount}</td>
              <td>{product.units}</td>
              <td>{product.brand}</td>
              {/* Add more table cells as needed based on Product properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
