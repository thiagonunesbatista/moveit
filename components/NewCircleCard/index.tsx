import Image from 'next/image'
import { useChallenges } from '../../contexts/ChallengesContext'

import CSSNewCircleCard from './NewCircleCard.module.css'

const BeforeBegin = () => {
  return (
    <div
      className={`${CSSNewCircleCard.beforeBeginWrapper} ${CSSNewCircleCard.wrapper}`}
    >
      {/* antes de iniciar */}
      <p>
        Inicie um ciclo
        <br />
        para receber desafios
        <br />
      </p>

      <img src='/up_cycle.svg' />

      <p>
        Avance de level completando
        <br />
        os desafios
      </p>
    </div>
  )
}

const NewCircleCard = () => {
  const {
    completeChallenge,
    currentChallenge,
    resetChallenge
  } = useChallenges()

  if (!currentChallenge) {
    return <BeforeBegin />
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
