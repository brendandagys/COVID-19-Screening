import { BrowserRouter, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FormScreen from '../screens/FormScreen'
import NavBar from './NavBar'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <main className='py-3'>
        <Container>
          <NavBar />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          {/* <Route path='/profile' component={ProfileScreen} /> */}
          <Route path='/' component={FormScreen} exact />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
