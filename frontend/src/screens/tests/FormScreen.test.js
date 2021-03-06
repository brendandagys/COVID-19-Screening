import userEvent from '@testing-library/user-event'
import App from '../../components/App'
import { render, screen, waitFor } from '../../test-utils'
import { server } from '../../test-server/server'
import { rest } from 'msw'

describe('FormScreen tests', () => {
  beforeEach(async () => {
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

    // Pre-screening modal appears
    expect(
      await screen.findByText('Pre-Screening Messages')
    ).toBeInTheDocument()

    // Can dismiss pre-screening modal
    userEvent.click(screen.getByRole('button', { name: 'Okay' }))

    await waitFor(() =>
      expect(
        screen.queryByRole('button', { name: 'Okay' })
      ).not.toBeInTheDocument()
    )
  })

  test('Responding "yes" to a question renders dismissable Contact Us modal', async () => {
    userEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0])
    expect(screen.getByText('Contact Us')).toBeInTheDocument()

    // Confirm that the Contact Us modal can be dismissed
    await waitFor(() =>
      userEvent.click(screen.getByRole('button', { name: 'Okay' }))
    )

    expect(
      screen.queryByRole('button', { name: 'Okay' })
    ).not.toBeInTheDocument()

    // Clicking 'Yes' again immediately should not display Contact Us modal
    userEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0])
    await waitFor(() =>
      expect(screen.queryByText('Contact Us')).not.toBeInTheDocument()
    )
  })

  test('Answering "No" to all questions shows Submit button', async () => {
    const noButtons = screen.getAllByRole('button', { name: 'No' })
    noButtons.forEach((button) => userEvent.click(button))
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  test('Answering "Yes" to question hides Submit button', async () => {
    userEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0])
    expect(screen.getByText('Contact Us')).toBeInTheDocument()

    await waitFor(() =>
      userEvent.click(screen.getByRole('button', { name: 'Okay' }))
    )

    // Clicking 'Yes' again immediately should not display Contact Us modal
    // Also testing that multiple 'Yes' clicks don't permanently hide button
    userEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0])
    await waitFor(() =>
      expect(screen.queryByText('Contact Us')).not.toBeInTheDocument()
    )

    expect(
      screen.queryByRole('button', { name: 'Submit' })
    ).not.toBeInTheDocument()
  })

  test('Clicking Submit button redirects to CompletedScreen', async () => {
    screen
      .getAllByRole('button', { name: 'No' })
      .forEach((button) => userEvent.click(button))

    userEvent.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      await screen.findByRole('button', { name: 'Start Over' })
    ).toBeInTheDocument()
  })
})
