import React, { useCallback } from 'react'
import { incrementByAmount, increment, decrement } from '@slices/counterSlice'
import { Button } from 'react-bootstrap'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
const ReducerDispatch: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const incrementHandler = useCallback(
    () => dispatch(increment())
    , [dispatch])
  return (
    <>
      <div>numbet: {counter}</div>
      <Button variant='primary' onClick={incrementHandler}>increment</Button>{' '}
      <Button variant='primary' onClick={() => dispatch(decrement())}>decrement</Button>{' '}
      <Button variant='primary' onClick={() => dispatch(incrementByAmount(7))}>incrementByAmount 7</Button>{' '}
    </>
  )
}
export default ReducerDispatch
