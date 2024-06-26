import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
// import products from '../products'

function CartScreen(props) {
    let { id: productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const qty = Number(searchParams.get('qty') || 1); // Retrieves the value of the "qty" query parameter

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping')
    }

  return (
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {!cartItems.length ? (
                <Message variant="info">
                    Your cart is empty <Link to="/">Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                    ${item.price}
                                </Col>
                                <Col md={3}>
                                    <Form.Control
                                        as="select"
                                        value={item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                    >
                                        {
                                            [...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))
                                        }
                                        

                                    </Form.Control>

                                </Col>
                                <Col md={1}>
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={() => removeFromCartHandler(item.product)}
                                    >
                                        <i className="fas fa-trash">

                                        </i>

                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        ${cartItems.reduce((acc, item) => acc + item.qty * Number(item.price), 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed to Checkout
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen
