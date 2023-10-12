import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Component: React.FC = () => {
  return (
    <div className='d-flex justify-content-center m-5'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}
