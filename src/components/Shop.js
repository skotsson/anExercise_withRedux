import { connect } from 'react-redux';

import { addCartItem, deleteInventoryItem } from '../redux/actions';
// import store from '../index';

const Shop = ({ inventory, addCartItem, deleteInventoryItem }) => {
  const handleClick = (item) => {
    addCartItem(item);
    deleteInventoryItem(item);
    console.log('dispatched');

    // const id = item.id;
    // setCartItems([...cartItems, item]);
    // setInventory([...inventory.filter((unit) => unit.id !== id)]);
  };

  return inventory.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick(item)}>Add</button>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  inventory: state.inventory,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (payload) => dispatch(addCartItem(payload)),
  deleteInventoryItem: (payload) => dispatch(deleteInventoryItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
