import { useEffect } from 'react'
import { Route, useHistory, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FormScreen from '../screens/FormScreen'
import NavBar from './NavBar'
import { useTypedSelector } from '../hooks/useTypedSelector'

const App = (): JSX.Element => {
  const { userInfo } = useTypedSelector((state) => state.authenticate)

  const history = useHistory()

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [history, userInfo])

  return (
    <main className='py-3'>
      <Container>
        <NavBar />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        {/* <Route path='/profile' component={ProfileScreen} /> */}
        <Route exact path='/'>
          {!userInfo ? <Redirect to='/login' /> : <FormScreen />}
        </Route>
      </Container>
    </main>
  )
}

export default App
