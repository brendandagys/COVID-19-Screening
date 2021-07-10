import { render, screen } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'
import { server } from '../../test-server/server'
import { rest } from 'msw'

describe('RegisterScreen tests', () => {
  beforeEach(() => {
    render(<App />)
    const registerLink = screen.getByRole('link', { name: 'Register' })
    userEvent.click(registerLink)
  })

  test('Can navigate to LoginScreen', async () => {
    const signInLink = screen.getAllByText('Sign In')[1] // NavBar [0]
    userEvent.click(signInLink)
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
  })

  test('Can register a new user', async () => {
    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const email = screen.getByLabelText('Email')
    const username = screen.getByLabelText('Username')
    const password1 = screen.getByLabelText('Password')
    const password2 = screen.getByLabelText('Confirm Password')

    userEvent.type(firstName, 'Brendan')
    userEvent.type(lastName, 'Dagys')
    userEvent.type(email, 'brendan@example.com')
    userEvent.type(username, 'brendan')
    userEvent.type(password1, 'password')
    userEvent.type(password2, 'password')

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)

    expect(
      await screen.findByRole('button', { name: 'Start Over' })
    ).toBeInTheDocument()
  })

  test('Mismatching passwords displays error message', async () => {
    const password1 = screen.getByLabelText('Password')
    const password2 = screen.getByLabelText('Confirm Password')
    userEvent.type(password1, 'a')
    userEvent.type(password2, 'b')

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)

    expect(
      await screen.findByText('Passwords do not match')
    ).toBeInTheDocument()
  })

  test('Username/email already exists error', async () => {
    server.use(
      rest.post('/api/users', async (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            message: 'Username is already in use',
            stack: 'test',
          })
        )
      })
    )

    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const email = screen.getByLabelText('Email')
    const username = screen.getByLabelText('Username')
    const password1 = screen.getByLabelText('Password')
    const password2 = screen.getByLabelText('Confirm Password')

    userEvent.type(firstName, 'Brendan')
    userEvent.type(lastName, 'Dagys')
    userEvent.type(email, 'brendan@example.com')
    userEvent.type(username, 'brendan')
    userEvent.type(password1, 'password')
    userEvent.type(password2, 'password')

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)

    expect(
      await screen.findByText('Username is already in use')
    ).toBeInTheDocument()
  })
})
