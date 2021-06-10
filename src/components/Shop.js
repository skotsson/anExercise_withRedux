import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addCartItem, deleteInventoryItem } from '../redux/actions';

const Shop = () => {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (item) => {
      dispatch(addCartItem(item));
      dispatch(deleteInventoryItem(item));
    },
    [dispatch],
  );

  return inventory.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick(item)}>Add</button>
    </div>
  ));
};

export default Shop;
