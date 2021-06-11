import {
  DELETE_SHOP_ITEM,
  DELETE_CART_ITEM,
  ADD_CART_ITEM,
  ADD_SHOP_ITEM,
} from './actionTypes';

export const deleteShopItem = item => ({
  type: DELETE_SHOP_ITEM,
  payload: item,
});

export const addShopItem = item => ({
  type: ADD_SHOP_ITEM,
  payload: item,
});

export const addCartItem = item => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const deleteCartItem = item => ({
  type: DELETE_CART_ITEM,
  payload: item,
});
