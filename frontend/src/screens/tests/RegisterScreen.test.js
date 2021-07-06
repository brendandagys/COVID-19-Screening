import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterScreen from '../RegisterScreen'

test('Can register a user', async () => {
  render(<RegisterScreen />)
})

test('Can navigate to LoginScreen', async () => {
  render(<RegisterScreen />)
})
