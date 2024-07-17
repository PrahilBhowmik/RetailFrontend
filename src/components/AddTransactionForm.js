import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import Product from './Product'; // Assuming Product component is in the same directory

const AddTransactionForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    products: [],
    date: new Date().toISOString(),
    userId: '6676995122fa28610553d87e', // Hardcoded for now
  });

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

    // Send data to backend using Axios
    try {
      const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL; // Access base URL from environment variable
      const url = `${baseUrl}/transactions`; // Construct full URL

      console.log(formData);
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        console.log('Transaction submitted successfully!');
        // You can clear the form here or redirect to another page
      } else {
        console.error('Error submitting transaction:', response.data.message || 'Unknown error'); // Handle specific or generic errors
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

      {/* Enable the date input field
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={(event) => setFormData({ ...formData, date: event.target.value })} />
      <br/><br/> */}

      <h3>Products</h3>
      <div id="product-container">
        {formData.products.map((product, index) => (
          <Product key={index} product={product} index={index} handleProductChange={handleProductChange} removeProduct={removeProduct}/>
        ))}
      </div>
      <button type="button" class="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
      <br /><br />

      <button type="submit" class="btn btn-success">Submit Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
