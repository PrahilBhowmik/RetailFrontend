const Product = ({ product, index, handleProductChange, removeProduct }) => {
  const handleRemoveProduct = () => {
    removeProduct(index); // Call the prop function to remove product
  };

  return (
    <div key={index} className="input-group mb-3" >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <span class="input-group-text" >Product ID</span>
        <input
          type="text"
          id={`productId-${index}`}
          name="id" // Nested name for clarity
          value={product.id}
          onChange={(event) => handleProductChange(index, { id: event.target.value })}
        />

        <span class="input-group-text" >Product Name</span>
        <input
          type="text"
          id={`productName-${index}`}
          name="name" // Nested name for clarity
          value={product.name}
          onChange={(event) => handleProductChange(index, { name: event.target.value })}
        />

        <span class="input-group-text" >Category</span>
        <input
          type="text"
          id={`productCategory-${index}`}
          name="category" // Nested name for clarity
          value={product.category}
          onChange={(event) => handleProductChange(index, { category: event.target.value })}
        />

        <span class="input-group-text" >MRP</span>
        <input
          type="number"
          id={`productMrp-${index}`}
          name="mrp" // Nested name for clarity
          value={product.mrp}
          onChange={(event) => handleProductChange(index, { mrp: event.target.value })}
        />

        <span class="input-group-text" >Cost</span>
        <input
          type="number"
          id={`productCost-${index}`}
          name="cost" // Nested name for clarity
          value={product.cost}
          onChange={(event) => handleProductChange(index, { cost: event.target.value })}
        />

        <span class="input-group-text" >Discount</span>
        <input
          type="number"
          id={`productDiscount-${index}`}
          name="discount" // Nested name for clarity
          value={product.discount}
          onChange={(event) => handleProductChange(index, { discount: event.target.value })}
        />

        <span class="input-group-text" >Units</span>
        <input
          type="number"
          id={`productUnits-${index}`}
          name="units" // Nested name for clarity
          value={product.units}
          onChange={(event) => handleProductChange(index, { units: event.target.value })}
        />
        <span class="input-group-text" >Brand</span>
        <input
          type="text"
          id={`productBrand-${index}`}
          name="brand" // Nested name for clarity
          value={product.brand}
          onChange={(event) => handleProductChange(index, { brand: event.value })}
        />
        <button type="button" class="btn btn-danger" onClick={handleRemoveProduct}>Remove Product</button>
      </div>
    </div>
  );
};

export default Product;
