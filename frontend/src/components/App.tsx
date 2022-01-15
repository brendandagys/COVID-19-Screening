import { useEffect } from 'react'
import { Route, useHistory, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FormScreen from '../screens/FormScreen'
import ProfileScreen from '../screens/ProfileScreen'
import NavBar from './NavBar'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CompletedScreen from '../screens/CompletedScreen'

const App = (): JSX.Element => {
  const { userInfo } = useTypedSelector((state) => state.authenticate)
  const { submission, userResetFlag } = useTypedSelector(
    (state) => state.submissionFetch
  )

  // console.log({ submission })
  // console.log({ userResetFlag })

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
        <Route path='/profile'>
          {!userInfo ? (
            <Redirect to='/login?redirect=/profile' />
          ) : (
            <ProfileScreen />
          )}
        </Route>
        <Route path='/completed'>
          {!userInfo ? (
            <Redirect to='/login?redirect=/completed' />
          ) : !submission || userResetFlag ? (
            <Redirect to='/' />
          ) : (
            <CompletedScreen createdAt={submission.createdAt} />
          )}
        </Route>
        <Route exact path='/'>
          {!userInfo ? (
            <Redirect to='/login' />
          ) : submission && !userResetFlag ? (
            <Redirect to='/completed' />
          ) : (
            <FormScreen />
          )}
        </Route>
      </Container>
    </main>
  )
}

export default App
