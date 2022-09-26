import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer
})

const cartItemsFromStorage = localStorage.cartItems
  ? JSON.parse(localStorage.cartItems)
  : []

const userInfoFromStorage = localStorage.userInfo
  ? JSON.parse(localStorage.userInfo)
  : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
