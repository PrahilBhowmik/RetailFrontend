import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import Product from './Product'; // Assuming Product component is in the same directory

const AddTransactionForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    products: [],
    date: new Date().toISOString(),
    userId: '', // Hardcoded for now
  });
  
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleAddProduct = () => {
    setFormData((prevState) => ({
      ...prevState,
      products: [...prevState.products, { id: '', name: '', category: '', mrp: null, cost: null, discount: null, units: 1, brand: '' }],
    }));
  };
  
  const handleProductChange = (index, updatedProduct) => {
    setFormData((prevState) => {
      const updatedProducts = [...prevState.products];
      updatedProducts[index] = { ...updatedProducts[index], ...updatedProduct };
      return { ...prevState, products: updatedProducts };
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setSuccessMessage(null);
    setErrorMessage(null);
    
    try {
      const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL;
      const url = `${baseUrl}/transactions`; 
      const instance = axios.create({
        withCredentials: true
      });
      const response = await instance.post(url, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.status === 200) { 
        setSuccessMessage('Transaction added successfully!');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting transaction:', error); // Handle network or other errors
    }
  };
  
  const removeProduct = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      products: prevState.products.filter((_, productIndex) => productIndex !== index),
    }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
    <h2>Add Transaction</h2>
    <label htmlFor="transactionType">Transaction Type:</label>
    <select name="transactionType" id="transactionType" value={formData.type} onChange={(event) => setFormData({ ...formData, type: event.target.value })}>
    <option value="BUY">Buy</option>
    <option value="SELL">Sell</option>
    <option value="RETURN_BUY">Return Buy</option>
    <option value="RETURN_SELL">Return Sell</option>
    <option value="DISPOSE">Dispose</option>
    </select>
    <br /><br />
    
    <h3>Products</h3>
    <div id="product-container">
    {formData.products.map((product, index) => (
      <Product key={index} product={product} index={index} handleProductChange={handleProductChange} removeProduct={removeProduct}/>
    ))}
    </div>
    <button type="button" class="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
    <br /><br />
    
    <button type="submit" class="btn btn-success">Submit Transaction</button>
    {successMessage && <p className="success">{successMessage}</p>}
    {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default AddTransactionForm;
