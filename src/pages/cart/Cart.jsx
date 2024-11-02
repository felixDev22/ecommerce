import { useContext } from 'react';
import { StoreContext } from '../../context/Store';

const Cart = () => {
  const { menuItems, cartItems, removeCartItems } = useContext(StoreContext);

  return (
    <div className="cart-container" id="cart">
      <h1>This is Cart page</h1>
    </div>
  );
};

export default Cart;
