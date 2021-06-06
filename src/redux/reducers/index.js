import { combineReducers } from 'redux';
import {
  DELETE_INVENTORY_ITEM,
  DELETE_CART_ITEM,
  ADD_CART_ITEM,
  ADD_INVENTORY_ITEM,
} from '../actions/actionTypes';

const INITIAL_INVENTORY = [
  { name: 'Socks', id: 0, quantity: 1 },
  { name: 'Hats', id: 1, quantity: 1 },
  { name: 'Shirts', id: 2, quantity: 1 },
];

const inventoryReducer = (state = INITIAL_INVENTORY, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INVENTORY_ITEM:
      return [...state, payload];

    case DELETE_INVENTORY_ITEM:
      return [
        ...state.filter((inventoryItem) => payload.id !== inventoryItem.id),
      ];

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
      return [...state.filter((cartItem) => payload.id !== cartItem.id)];

    default:
      return state;
  }
};

export default combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
});
