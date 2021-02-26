import CSSCompletedChallenges from './CompletedChallenges.module.css'

import { useChallenges } from '../../contexts/ChallengesContext'

const CompletedChallenges = ({ className }) => {
  const { completedChallenges } = useChallenges()

  return (
    <div className={`${CSSCompletedChallenges.wrapper} ${className}`}>
      <div>
        <p>Desafios completos</p>
        <p>{completedChallenges}</p>
      </div>
      <div />
    </div>
  )
}

export default CompletedChallenges
