import CSSLevelUpModal from './LevelUpModal.module.css'

import { useChallenges } from '../../contexts/ChallengesContext'

const LevelUpModal = () => {
  const { level, setShowLevelUpModal } = useChallenges()

  return (
    <div className={CSSLevelUpModal.backgroundWrapper}>
      <div className={CSSLevelUpModal.wrapper}>
        <button>
          <img
            src='/times.svg'
            className={CSSLevelUpModal.closeIcon}
            onClick={() => setShowLevelUpModal(false)}
          />
        </button>

        <div className={CSSLevelUpModal.levelWrapper}>
          <p className={CSSLevelUpModal.level}>{level}</p>
          <img src='/union.svg' height='100px' width='153px' />
        </div>

        <p className={CSSLevelUpModal.title}>Parabéns</p>
        <p className={CSSLevelUpModal.subtitle}>Você alcançou um novo level.</p>
      </div>
    </div>
  )
}

export default LevelUpModal
