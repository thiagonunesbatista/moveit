import { useChallenges } from '../../contexts/ChallengesContext'

import CSSclasses from './styles.module.css'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <header className={CSSclasses.wrapper}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar
