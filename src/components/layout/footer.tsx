import React from 'react'
import { Container } from 'react-bootstrap'
import pkg from '@/../package.json'

export const Component: React.FC = () => {
  return (
    <Container fluid className='bg-light py-3'>
      <Container>
        <p className='text-center mb-0'>
          © 2023-{new Date().getFullYear()} {pkg.displayName}. All rights reserved. v.{pkg.version}
        </p>
      </Container>
    </Container>
  )
}
