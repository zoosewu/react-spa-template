import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('renders learn react link', async () => {
  const { container } = render(<App />)
  const linkElement = container.querySelector('div.App')
  expect(linkElement).toBeInTheDocument()
  expect(screen.getByText(/React SPA Template/i)).toBeInTheDocument()
  const user = userEvent.setup()
  await user.click(screen.getByText(/reduce/i))
  expect(screen.getByText(/reduce/i)).toBeInTheDocument()
})
