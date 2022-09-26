import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://ecommerce-backend-00fl.onrender.com/api/product/${id}`
  )

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  const store = getState().cart.cartItems

  localStorage.cartItems = JSON.stringify(store)
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  const storeCartItems = getState().cart.cartItems

  localStorage.cartItems = JSON.stringify(storeCartItems)
}