import React, { useEffect } from 'react'
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
  Card,
  Image,
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  const qty = searchParams.get('qty')

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkOutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go back</Link>{' '}
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      {' '}
                      <i className='fas fa-trash'></i>{' '}
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>
                Subtotal (
                {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                items
              </h2>
              $
              {cartItems
                .reduce(
                  (acc, item) => acc + Number(item.qty) * Number(item.price),
                  0
                )
                .toFixed(2)}
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Button
                  type='button'
                  className='btn-block btn'
                  disabled={cartItems.length === 0}
                  onClick={checkOutHandler}
                >
                  Proceed To CheckOut
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
