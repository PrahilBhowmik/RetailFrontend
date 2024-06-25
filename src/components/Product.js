const Product = ({ product, index, handleProductChange }) => {
    return (
      <div key={index}>
        <label htmlFor={`productId-${index}`}>Product ID:</label>
        <input
          type="text"
          id={`productId-${index}`}
          name="id" // Nested name for clarity
          value={product.id}
          onChange={(event) => handleProductChange(index, { id: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productName-${index}`}>Product Name:</label>
        <input
          type="text"
          id={`productName-${index}`}
          name="name" // Nested name for clarity
          value={product.name}
          onChange={(event) => handleProductChange(index, { name: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productCategory-${index}`}>Category:</label>
        <input
          type="text"
          id={`productCategory-${index}`}
          name="category" // Nested name for clarity
          value={product.category}
          onChange={(event) => handleProductChange(index, { category: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productMrp-${index}`}>MRP:</label>
        <input
          type="number"
          id={`productMrp-${index}`}
          name="mrp" // Nested name for clarity
          value={product.mrp}
          onChange={(event) => handleProductChange(index, { mrp: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productCost-${index}`}>Cost:</label>
        <input
          type="number"
          id={`productCost-${index}`}
          name="cost" // Nested name for clarity
          value={product.cost}
          onChange={(event) => handleProductChange(index, { cost: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productDiscount-${index}`}>Discount:</label>
        <input
          type="number"
          id={`productDiscount-${index}`}
          name="discount" // Nested name for clarity
          value={product.discount}
          onChange={(event) => handleProductChange(index, { discount: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productUnits-${index}`}>Units:</label>
        <input
          type="number"
          id={`productUnits-${index}`}
          name="units" // Nested name for clarity
          value={product.units}
          onChange={(event) => handleProductChange(index, { units: event.target.value })}
        />
        <br />
  
        <label htmlFor={`productBrand-${index}`}>Brand:</label>
        <input
          type="text"
          id={`productBrand-${index}`}
          name="brand" // Nested name for clarity
          value={product.brand}
          onChange={(event) => handleProductChange(index, { brand: event.target.value })}
        />
        <br />
      </div>
    );
  };
  
  export default Product;
  