import { render, screen } from '@testing-library/react'
import ReducerDispatch from './reducerDispatch'
import thunk, { Provider } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import createMockStore from 'redux-mock-store'
import { renderWithProviders } from '@/utils/redux-utils'

// type DispatchExts = ThunkDispatch<RootState, void, AnyAction>

// const middleware = [thunk]
// const mockStore = createMockStore<RootState, DispatchExts>(middleware)

describe('renders reducerDispatch', () => {
  beforeAll(() => {
    const { getByText } = renderWithProviders(<ReducerDispatch />, {
      preloadedState: {
        counter: { value: 5 }
      }
    })
    const bottunElements = screen.getAllByRole('button')
    expect(bottunElements).toHaveLength(3)
  })
  test('test button', () => {

  })
})
