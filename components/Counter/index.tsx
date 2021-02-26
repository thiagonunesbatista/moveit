import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

import Button from '../Button'

import { useChallenges } from '../../contexts/ChallengesContext'

import CSSCounter from './Counter.module.css'

const Counter = ({ className }) => {
  const [time, setTime] = useState(60 * 0.05)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const { currentChallenge, startNewChallenge } = useChallenges()

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [leftMinutes, rightMinutes] = String(minutes).padStart(2, '0').split('')
  const [leftSeconds, rightSeconds] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      const timer = setTimeout(() => {
        setTime(current => --current)
      }, 1000)

      return () => clearTimeout(timer)
    } else if (time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    } else {
      setTime(60 * 0.05)
    }
  }, [time, isActive])

  useEffect(() => {
    if (!currentChallenge) {
      setIsActive(false)
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
        onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
        className={isActive && CSSCounter.leaveCycle}
        disabled={hasFinished}
      >
        <p>
          {isActive
            ? 'Abandonar ciclo'
            : hasFinished
            ? 'Ciclo encerrado'
            : 'Iniciar um ciclo'}
        </p>
        <Image
          width='14px'
          height='14px'
          src={isActive ? '/times.svg' : '/play_arrow.svg'}
        />
      </Button>
    </Fragment>
  )
}

export default Counter
