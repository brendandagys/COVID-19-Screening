import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompletedScreen from '../CompletedScreen'

test('Proper color renders by day of week', async () => {
  render(<CompletedScreen />)
})

test('Can send result email', async () => {
  render(<CompletedScreen />)
})

test('Email displays', async () => {
  render(<CompletedScreen />)
})

test('Timestamp of completion displays', async () => {
  render(<CompletedScreen />)
})

test('Clicking Start Over button redirects to FormScreen', async () => {
  render(<CompletedScreen />)
})
