import { render, screen, waitFor } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'
import { server } from '../../test-server/server'
import { rest } from 'msw'

describe('ProfileScreen tests', () => {
  beforeEach(async () => {
    render(<App />)

    const usernameField = screen.getByLabelText('Username')
    const passwordField = screen.getByLabelText('Password')
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    userEvent.type(usernameField, 'brendan')
    userEvent.type(passwordField, 'testPassword')
    userEvent.click(loginButton)

    userEvent.click(await screen.findByRole('button', { name: 'Brendan' }))
    userEvent.click(screen.getByRole('link', { name: 'Profile' }))
  })

  test('Password match error displays', async () => {
    const password1 = screen.getByLabelText('Password')
    const password2 = screen.getByLabelText('Confirm Password')
    userEvent.type(password1, 'a')
    userEvent.type(password2, 'b')

    const updateButton = screen.getByRole('button', { name: 'Update' })
    userEvent.click(updateButton)

    expect(
      await screen.findByText('Passwords do not match')
    ).toBeInTheDocument()
  })

  test('Username/email already exists error', async () => {
    server.use(
      rest.put('/api/users/profile', async (req, res, ctx) => {
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

    // Must waitFor because we need to wait to userInfo from getUserDetails() action, which is required for submitHandler() to be called
    await waitFor(() => userEvent.type(firstName, 'Brendan'))
    userEvent.type(lastName, 'Dagys')
    userEvent.type(email, 'brendan@example.com')
    userEvent.type(username, 'brendan')
    userEvent.type(password1, 'password')
    userEvent.type(password2, 'password')

    const updateButton = screen.getByRole('button', { name: 'Update' })

    userEvent.click(updateButton)

    // TEST APPEARANCE/DISAPPEARANCE OF SPINNER
    // expect(screen.queryByRole('status')).toBeInTheDocument()

    // await waitFor(() => {
    //   expect(screen.queryByRole('status')).not.toBeInTheDocument()
    // })

    expect(
      await screen.findByText('Username is already in use')
    ).toBeInTheDocument()
  })

  test('Can update profile', async () => {
    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const email = screen.getByLabelText('Email')
    const username = screen.getByLabelText('Username')
    const password1 = screen.getByLabelText('Password')
    const password2 = screen.getByLabelText('Confirm Password')

    // Must waitFor because we need to wait to userInfo from getUserDetails() action, which is required for submitHandler() to be called
    await waitFor(() => userEvent.type(firstName, 'Jordan'))
    userEvent.type(lastName, 'Dagis')
    userEvent.type(email, 'jordan@example.com')
    userEvent.type(username, 'jordan')
    userEvent.type(password1, '1234567')
    userEvent.type(password2, '1234567')

    const updateButton = screen.getByRole('button', { name: 'Update' })

    userEvent.click(updateButton)

    expect(
      await screen.findByText('Your profile is updated!')
    ).toBeInTheDocument()
  })
})
