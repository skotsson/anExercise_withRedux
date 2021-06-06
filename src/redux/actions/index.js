import {
  DELETE_INVENTORY_ITEM,
  DELETE_CART_ITEM,
  ADD_CART_ITEM,
  ADD_INVENTORY_ITEM,
} from './actionTypes';

export const deleteInventoryItem = (item) => ({
  type: DELETE_INVENTORY_ITEM,
  payload: item,
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const addInventoryItem = (item) => ({
  type: ADD_INVENTORY_ITEM,
  payload: item,
});

export const deleteCartItem = (item) => ({
  type: DELETE_CART_ITEM,
  payload: item,
});
