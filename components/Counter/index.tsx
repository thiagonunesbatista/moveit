import { Fragment, useEffect, useState } from 'react'

import Button from '../Button'

import { useChallenges } from '../../contexts/ChallengesContext'

import PlayArrow from '../../public/play_arrow.svg'
import TimesIcon from '../../public/times.svg'

import CSSCounter from './Counter.module.css'

const Counter = ({ className }) => {
  const [time, setTime] = useState(60 * 0.05)
  const [hasFinished, setHasFinished] = useState(false)

  const {
    currentChallenge,
    isActiveTimer,
    setIsActiveTimer,
    startNewChallenge
  } = useChallenges()

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [leftMinutes, rightMinutes] = String(minutes).padStart(2, '0').split('')
  const [leftSeconds, rightSeconds] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActiveTimer && time > 0) {
      const timer = setTimeout(() => {
        setTime(current => --current)
      }, 1000)

      return () => clearTimeout(timer)
    } else if (time === 0) {
      setHasFinished(true)
      setIsActiveTimer(false)
      startNewChallenge()
    } else {
      setTime(60 * 0.05)
    }
  }, [time, isActiveTimer])

  useEffect(() => {
    if (!currentChallenge) {
      setIsActiveTimer(false)
      setHasFinished(false)
      setTime(60 * 25)
    }
  }, [currentChallenge])

  return (
    <Fragment>
      <div className={`${CSSCounter.wrapper} ${className}`}>
        <div className={CSSCounter.unitTime}>{leftMinutes}</div>
        <div className={CSSCounter.unitTime}>{rightMinutes}</div>
        <p>:</p>
        <div className={CSSCounter.unitTime}>{leftSeconds}</div>
        <div className={CSSCounter.unitTime}>{rightSeconds}</div>
      </div>
      <Button
        onClick={() =>
          isActiveTimer ? setIsActiveTimer(false) : setIsActiveTimer(true)
        }
        className={isActiveTimer && CSSCounter.leaveCycle}
        disabled={hasFinished}
      >
        <p>
          {isActiveTimer
            ? 'Abandonar ciclo'
            : hasFinished
            ? 'Ciclo encerrado'
            : 'Iniciar um ciclo'}
        </p>

        {isActiveTimer ? <TimesIcon /> : <PlayArrow />}
      </Button>
    </Fragment>
  )
}

export default Counter
