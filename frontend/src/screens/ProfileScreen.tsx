import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const ProfileScreen = (): JSX.Element => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isAdministrator, setIsAdministrator] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const { getUserDetails, updateUser } = useActions()

  const userDetails = useTypedSelector((state) => state.userDetails)
  const { loading, error, userInfo } = userDetails

  const userUpdate = useTypedSelector((state) => state.userUpdate)
  const { error: errorUpdate, userInfo: userInfoUpdate } = userUpdate

  useEffect(() => {
    if (!userInfo) {
      getUserDetails('profile')
    } else {
      setFirstName(userInfo.firstName)
      setLastName(userInfo.lastName)
      setEmail(userInfo.email)
      setUsername(userInfo.username)
      setIsAdministrator(userInfo.isAdministrator)
    }
  }, [confirmPassword, getUserDetails, password, userInfo])

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (userInfo) {
      setMessage(null)
      updateUser({
        id: userInfo.id,
        firstName,
        lastName,
        email,
        username,
        password,
        isAdministrator,
      })
    }
  }

  return (
    <FormContainer>
      <h2 className='mb-4'>Your Profile</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {userInfoUpdate && !message && (
        <Message variant='success'>Your profile is updated!</Message>
      )}
      {loading && <Loader />}
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First name...'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last name...'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
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
        <Form.Group controlId='confirmpassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            autoComplete='true'
            type='password'
            placeholder='Password...'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        {/* <Form.Group controlId='administrator'>
          <Form.Check
            checked={isAdministrator}
            disabled={!userInfo?.isAdministrator ?? true}
            type='checkbox'
            label='Administrator?'
            onChange={() => setIsAdministrator((prev) => !prev)}
          />
        </Form.Group>
        <br /> */}

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen
