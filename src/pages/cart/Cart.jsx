import { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import './cart.css';

const Cart = () => {
  const { menuItems, cartItems, removeCartItems } = useContext(StoreContext);

  return (
    <div className="cart-container" id="cart">
      <div className="cart-display">
        <h1>This is the Cart page</h1>

        {menuItems.map((item, index) =>
          cartItems[item.id] > 0 ? (
            <div key={index} className="cart-items">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItems[item.id]}</p>
              <p>{item.price * cartItems[item.id]}</p>
              <button onClick={() => removeCartItems(item.id)}>Remove</button>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Cart;
