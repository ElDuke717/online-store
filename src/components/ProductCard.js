import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
