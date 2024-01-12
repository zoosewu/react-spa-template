import React, { Suspense } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Component as Loading } from './Loading'
export const Component: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container fluid>
      <Suspense fallback={<Loading />}>
        {navigation.state !== 'idle' && <p>Navigation in progress...</p>}
        <Outlet />
      </Suspense>
    </Container>
  )
}
