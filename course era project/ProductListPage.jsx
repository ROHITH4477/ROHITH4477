// src/pages/ProductListPage.jsx
import { PLANT_DATA } from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Group plants by category for display
  const categories = [...new Set(PLANT_DATA.map(p => p.category))];

  return (
    <div className="product-list-page">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <section key={category}>
          <h3>{category}</h3>
          <div className="product-grid">
            {PLANT_DATA.filter(p => p.category === category).map((product) => {
              const isInCart = cartItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(product)} disabled={isInCart}>
                    {isInCart ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListPage;