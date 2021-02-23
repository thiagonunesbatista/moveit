import CSSCompletedChallenges from './CompletedChallenges.module.css'

const CompletedChallenges = ({ className }) => {
  return (
    <div className={`${CSSCompletedChallenges.wrapper} ${className}`}>
      <div>
        <p>Desafios completos</p>
        <p>00</p>
      </div>
      <div />
    </div>
  )
}

export default CompletedChallenges
