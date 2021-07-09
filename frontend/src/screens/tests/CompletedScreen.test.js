import userEvent from '@testing-library/user-event'
import App from '../../components/App'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../../test-utils'
import { server } from '../../test-server/server'
import { rest } from 'msw'

describe('CompletedScreen tests', () => {
  beforeEach(() => {
    render(<App />)

    const usernameField = screen.getByLabelText('Username')
    const passwordField = screen.getByLabelText('Password')
    const loginButton = screen.getByRole('button', { name: 'Log In' })
    userEvent.type(usernameField, 'brendan')
    userEvent.type(passwordField, 'testPassword')
    userEvent.click(loginButton)
  })

  test('Proper color renders by day of week', async () => {
    let color
    // Sunday is 0, Monday is 1...
    switch (new Date().getDay()) {
      case 0: // Sunday - purple
        color = 'rgb(205, 183, 246)' // '#CDB7F6'
        break
      case 1: // Monday - yellow
        color = 'rgb(254, 242, 80)' // '#FEF250'
        break
      case 2: // Tuesday - green
        color = 'rgb(65, 146, 75)' // '#41924B'
        break
      case 3: // Wednesday - pink
        color = 'rgb(255, 209, 220)' // '#FFD1DC'
        break
      case 4: // Thursday - blue
        color = 'rgb(46, 80, 144)' // '#2E5090'
        break
      case 5: // Friday - orange
        color = 'rgb(255, 179, 71)' // '#FFB347'
        break
      case 6: // Saturday - purple
        color = 'rgb(205, 183, 246)' // '#CDB7F6'
        break
      default:
        break
    }

    expect(await screen.findByTestId('background-color')).toHaveStyle(
      `background-color: '${color}'`
    )
  })

  test('Can send result email', async () => {
    server.use(
      rest.get('/api/submissions/email', async (req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    const sendEmailButton = await screen.findByRole('button', {
      name: 'Send Results By Email',
    })

    expect(sendEmailButton).not.toBeDisabled()

    userEvent.click(sendEmailButton)

    await waitFor(() => {
      expect(sendEmailButton).not.toBeInTheDocument()
    })

    // await waitForElementToBeRemoved(() =>
    //   screen.queryByText('Send Results By Email')
    // )

    expect(await screen.findByText('Email sent!')).toBeInTheDocument()
  })

  test('Send email button is disabled on load', async () => {
    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: 'Send Results By Email' })
      ).toBeDisabled()
    )
  })

  test('Timestamp of completion displays', async () => {
    expect(await screen.findByText(/\d{1,2}:\d\d:\d\d /i)).toBeInTheDocument()
  })

  test('Clicking Start Over button redirects to FormScreen', async () => {
    userEvent.click(await screen.findByRole('button', { name: 'Start Over' }))

    const firstNoButton = await screen.findAllByRole('button', {
      name: 'No',
    })
    expect(firstNoButton[0]).toBeInTheDocument()
  })
})
