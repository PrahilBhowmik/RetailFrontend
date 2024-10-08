import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [username, setUsername] = useState('');
  const [inventory, setInventory] = useState([]);
  const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL; 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/user`,   
          {
            credentials: 'include',
            redirect: 'manual'
          });
          
          console.log(response);
          
          if(response.ok){
            try {
              let uri = `${baseUrl}/user`;
              const response = await axios.get(uri,{withCredentials: true, maxRedirects: 0});
              setUsername(response.data.name);
              setInventory(Object.values(response.data.products));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
          else if(response.status === 404){
            window.location.href = "/new_user";
          }
          else if(response.type==='opaqueredirect'){
            window.location.href=response.url;
          }
        }catch (error) {
          console.error('Error fetching data:', error);
        };
      };
      fetchData();
    }); // Run useEffect only when userId changes
    
    return (
      <div>
      <h1>Homepage of {username}</h1>
      <h2>Inventory</h2>
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
        <td>{product.discount * 100}%</td>
        <td>{product.units}</td>
        <td>{product.brand}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
    );
  };
  
  export default Home;
  