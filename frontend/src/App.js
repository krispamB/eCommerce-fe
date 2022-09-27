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

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
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
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
