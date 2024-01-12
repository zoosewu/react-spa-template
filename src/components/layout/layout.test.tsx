import React from 'react'
import { render, screen } from '@testing-library/react'
// import { Component as Layout } from './layout'
import { RouterProvider } from 'react-router-dom'
// import type { Router } from '@remix-run/router'
import { router } from '@/App'
// import { ContainerRouter } from '@/containerRouter'
describe('test layout', () => {
  test('render layout', () => {
    const { container } = render(
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    )

    const headerElement = container.querySelector('a.navbar-brand')
    expect(headerElement).toBeInTheDocument()
    const footerElement = screen.getByText(/All rights reserved\./i)
    expect(footerElement).toBeInTheDocument()
  })
})
