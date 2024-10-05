import React, { useState } from 'react';
import axios from 'axios';

const NewUserForm = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const baseUrl = process.env.REACT_APP_RETAIL_SERVICE_API_BASE_URL;
      const url = `${baseUrl}/user`;
      const instance = axios.create({
        withCredentials: true
      });
      
      const response = await instance.post(url, { name }, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) { // Check for successful creation (201 Created)
        setSuccessMessage('User added successfully!');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading} // Disable form while loading
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating User...' : 'Create User'}
      </button>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default NewUserForm;