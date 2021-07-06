import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileScreen from '../ProfileScreen'

test('Can change each field', async () => {
  render(<ProfileScreen />)
})

test('Can update profile', async () => {
  render(<ProfileScreen />)
})

test('Password match error displays', async () => {
  render(<ProfileScreen />)
})

test('Existing user error displays', async () => {
  render(<ProfileScreen />)
})
