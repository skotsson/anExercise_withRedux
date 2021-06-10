import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteCartItem, addInventoryItem } from '../redux/actions/';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (item) => {
      dispatch(addInventoryItem(item));
      dispatch(deleteCartItem(item));
    },
    [dispatch],
  );

  return cart.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick(item)}>Remove</button>
    </div>
  ));
};

export default Cart;
