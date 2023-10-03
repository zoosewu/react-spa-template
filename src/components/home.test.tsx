import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './home'

test('renders home', () => {
  render(<Home />)
  const linkElement = screen.getByText(/This is home page\./i)
  expect(linkElement).toBeInTheDocument()
})
