import { render, screen } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import LoginScreen from '../LoginScreen'
import App from '../../components/App'
import { server } from '../../test-server/server'
import { rest } from 'msw'

describe('LoginScreen tests', () => {
  test('Form renders', () => {
    render(<LoginScreen />)
    const usernameField = screen.getByLabelText('Username')
    const passwordField = screen.getByLabelText('Password')
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    const registerLink = screen.getByRole('link', { name: 'Register' })
    expect(loginButton).toBeInTheDocument()
    expect(usernameField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(registerLink).toBeInTheDocument()
  })

  test('Can navigate to RegisterScreen', () => {
    render(<App />)
    const registerLink = screen.getByRole('link', { name: 'Register' })
    userEvent.click(registerLink)
    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument()
  })

  // Handler returns error if username is not 'brendan'
  test('Improper username/password message displays and login fails', async () => {
    render(<App />)
    const usernameField = screen.getByLabelText('Username')
    const passwordField = screen.getByLabelText('Password')
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    userEvent.type(usernameField, 'bad')
    userEvent.type(passwordField, 'bad')
    userEvent.click(loginButton)
    expect(
      await screen.findByText('Invalid email or password')
    ).toBeInTheDocument()
    expect(await screen.findByText('New user?')).toBeInTheDocument()
  })

  test('Can log in and view FormScreen', async () => {
    server.use(
      rest.get('/api/submissions', async (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            message: 'You have not completed the screening today',
            stack: 'test',
          })
        )
      })
    )

    render(<App />)

    const usernameField = screen.getByLabelText('Username')
    const passwordField = screen.getByLabelText('Password')
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    userEvent.type(usernameField, 'brendan')
    userEvent.type(passwordField, 'testPassword')
    userEvent.click(loginButton)
    expect(
      await screen.findByText('Pre-Screening Messages')
    ).toBeInTheDocument()
  })
})
