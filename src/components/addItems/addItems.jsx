import { StoreContext } from '../../context/Store';
import { IoMdAddCircle } from 'react-icons/io';
import { IoRemoveCircle } from 'react-icons/io5';
import { useContext } from 'react';
import './addItem.css';

const AddItems = ({ id }) => {
  const { cartItems, addCartItems, removeCartItems } = useContext(StoreContext);

  return (
    <div className="add-cartWrapper">
      <div>
        <IoMdAddCircle className="add" onClick={() => addCartItems(id)} />
      </div>

      <div>
        <IoRemoveCircle className="add" onClick={() => removeCartItems(id)} />
      </div>
    </div>
  );
};

export default AddItems;
