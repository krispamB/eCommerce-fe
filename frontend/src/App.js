import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/page' element={<HomeScreen />} />
            <Route path='/search' element={<HomeScreen />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='product/:id' element={<ProductScreen />} />
            <Route path='cart'>
              <Route index element={<CartScreen />} />
              <Route path=':id' element={<CartScreen />} />
            </Route>
            <Route path='login' element={<LoginScreen />} />
            <Route path='register' element={<RegisterScreen />} />
            <Route path='profile' element={<ProfileScreen />} />
            <Route path='shipping' element={<ShippingScreen />} />
            <Route path='payment' element={<PaymentMethodScreen />} />
            <Route path='placeOrder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/admin/userList' element={<UserListScreen />} />
            <Route path='/admin/user/:userId/edit' element={<UserEditScreen />} />
            <Route path='/admin/productList' element={<ProductListScreen />} />
            <Route path='/admin/product/:productId/edit' element={<ProductEditScreen />} />
            <Route path='/admin/orderList' element={<OrderListScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
