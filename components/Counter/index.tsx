import { Fragment, useEffect, useState } from 'react'

import Button from '../Button'

import CSSCounter from './Counter.module.css'
const Counter = ({ className }) => {
  const [time, setTime] = useState(60 * 25)
  const [startTimer, setStartTimer] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [leftMinutes, rightMinutes] = String(minutes).padStart(2, '0').split('')
  const [leftSeconds, rightSeconds] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (startTimer && time > 0) {
      const timer = setTimeout(() => {
        setTime(current => --current)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setTime(60 * 25)
    }
  }, [time, startTimer])

  return (
    <Fragment>
      <div className={`${CSSCounter.wrapper} ${className}`}>
        <div className={CSSCounter.unitTime}>{leftMinutes}</div>
        <div className={CSSCounter.unitTime}>{rightMinutes}</div>
        <p>:</p>
        <div className={CSSCounter.unitTime}>{leftSeconds}</div>
        <div className={CSSCounter.unitTime}>{rightSeconds}</div>
      </div>
      <Button onClick={() => setStartTimer(true)}>Iniciar um ciclo</Button>
    </Fragment>
  )
}

export default Counter
