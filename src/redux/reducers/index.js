import { combineReducers } from 'redux';
import {
  DELETE_SHOP_ITEM,
  DELETE_CART_ITEM,
  ADD_CART_ITEM,
  ADD_SHOP_ITEM,
} from '../actions/actionTypes';

const INITIAL_SHOP = [
  { name: 'Socks', id: 0, quantity: 1 },
  { name: 'Hats', id: 1, quantity: 1 },
  { name: 'Shirts', id: 2, quantity: 1 },
];

const shopReducer = (state = INITIAL_SHOP, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SHOP_ITEM:
      return [...state, payload];

    case DELETE_SHOP_ITEM:
      return [...state.filter(shopItem => payload.id !== shopItem.id)];

    default:
      return state;
  }
};

const INITIAL_CART = [];
const cartReducer = (state = INITIAL_CART, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART_ITEM:
      return [...state, payload];

    case DELETE_CART_ITEM:
      return [...state.filter(cartItem => payload.id !== cartItem.id)];

    default:
      return state;
  }
};

export default combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});
