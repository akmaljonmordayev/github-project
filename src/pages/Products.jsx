import React from 'react'

function Product() {
 const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "$120",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Adidas Sneakers",
    price: "$100",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
  },
  {
    id: 3,
    name: "Puma Shoes",
    price: "$90",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
  },
];

function Product() {
  return (
    <section className="product-section">
      <h1>Our Products</h1>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>{product.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

}

export default Product