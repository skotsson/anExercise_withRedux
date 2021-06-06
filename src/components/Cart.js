import { connect } from 'react-redux';

import { deleteCartItem, addInventoryItem } from '../redux/actions';

const Cart = ({ cart, deleteCartItem, addInventoryItem }) => {
  const handleClick = (item) => {
    addInventoryItem(item);
    deleteCartItem(item);
  };

  return cart.map((item, i) => (
    <div className='items' key={`id_${i}`}>
      <h4>{item.name}</h4>
      <button onClick={() => handleClick(item)}>Remove</button>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addInventoryItem: (payload) => dispatch(addInventoryItem(payload)),
  deleteCartItem: (payload) => dispatch(deleteCartItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
