import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { useHistory, useLocation } from 'react-router'

const LoginScreen = (): JSX.Element => {
  const history = useHistory()
  const location = useLocation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useActions()

  const authenticate = useTypedSelector((state) => {
    return state.authenticate
  })

  const { loading, error, userInfo } = authenticate

  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <FormContainer>
      <h1 className='mb-4'>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoComplete='true'
            type='text'
            placeholder='Username...'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoComplete='true'
            type='password'
            placeholder='Password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button style={{ width: '100%' }} type='submit' variant='primary'>
          Log In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New user?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
