import Image from 'next/image'
import { Fragment } from 'react'
import { useChallenges } from '../../contexts/ChallengesContext'

import CSSNewCircleCard from './NewCircleCard.module.css'

type beforeBeginprops = { started: boolean }

const BeforeBegin = ({ started }: beforeBeginprops) => {
  return (
    <div
      className={`${CSSNewCircleCard.beforeBeginWrapper} ${CSSNewCircleCard.wrapper}`}
    >
      {!started ? (
        <Fragment>
          <p>Inicie um ciclo para receber desafios a serem completados</p>

          <div className={CSSNewCircleCard.activeTimer}>
            <img src='/up_cycle.svg' />
            <p>Complete-os e ganhe experiência e avance de leve.</p>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>Inicie um ciclo para receber desafios</p>

          <img src='/up_cycle.svg' />

          <p>Avance de level completando os desafios</p>
        </Fragment>
      )}
    </div>
  )
}

const NewCircleCard = () => {
  const {
    completeChallenge,
    currentChallenge,
    isActiveTimer,
    resetChallenge
  } = useChallenges()

  if (!currentChallenge) {
    return <BeforeBegin started={isActiveTimer} />
  }

  return (
    <div
      className={`${CSSNewCircleCard.challengeWrapper} ${CSSNewCircleCard.wrapper}`}
    >
      <p className={CSSNewCircleCard.gainXP}>
        Ganhe {currentChallenge.amount}xp
      </p>

      <Image src='/peso.svg' height='140px' width='112px' />

      <p className={CSSNewCircleCard.title}>Exercite-se</p>

      <p className={CSSNewCircleCard.description}>
        {currentChallenge.description}
      </p>

      <footer className={CSSNewCircleCard.buttonsWrapper}>
        <button onClick={() => resetChallenge()}>Falhei</button>
        <button onClick={() => completeChallenge()}>Completei</button>
      </footer>
    </div>
  )
}

export default NewCircleCard
