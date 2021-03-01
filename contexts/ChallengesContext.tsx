import Cookies from 'js-cookie'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import LevelUpModal from '../components/LevelUpModal'

import challenges from '../challenges.json'

const Context = createContext({} as ChallengesContextData)

export const useChallenges = () => useContext(Context)

interface ChallengesContextProps {
  children: ReactNode
  completedChallenges: number
  currentExperience: number
  level: number
}

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  completedChallenges: number
  completeChallenge: () => void
  currentChallenge: Challenge
  currentExperience: number
  experienceToNextLevel: number
  level: number
  levelUp: () => void
  resetChallenge: () => void
  startNewChallenge: () => void
  setShowLevelUpModal: (boolean) => void
  showLevelUpModal: boolean
}

const ChallengesContext = ({
  completedChallenges: completedChallengesProps,
  currentExperience: currentExperienceProps,
  level: levelProps,
  children
}: ChallengesContextProps) => {
  const [level, setLevel] = useState(levelProps || 1)
  const [currentExperience, setCurrentExperience] = useState(
    currentExperienceProps || 0
  )
  const [completedChallenges, setCompletedChallenges] = useState(
    completedChallengesProps || 0
  )
  const [currentChallenge, setCurrentChallenge] = useState(null)
  const [showLevelUpModal, setShowLevelUpModal] = useState(true)

  const levelUp = () => {
    setLevel(current => (current += 1))
    setShowLevelUpModal(true)
  }

  const resetChallenge = () => setCurrentChallenge(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const completeChallenge = () => {
    if (!currentChallenge) {
      return
    }

    const { amount } = currentChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
    }
    setCurrentChallenge(null)
    setCurrentExperience(finalExperience)
    setCompletedChallenges(current => (current += 1))
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)

    const challenge = challenges[randomChallengeIndex]

    setCurrentChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} XP!`
      })
    }
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('completedChallenges', String(completedChallenges))
    Cookies.set('currentExperience', String(currentExperience))
  }, [level, currentExperience, completedChallenges])

  return (
    <Context.Provider
      value={{
        completedChallenges,
        completeChallenge,
        currentChallenge,
        currentExperience,
        experienceToNextLevel,
        level,
        levelUp,
        resetChallenge,
        startNewChallenge,
        setShowLevelUpModal,
        showLevelUpModal
      }}
    >
      {children}
      {showLevelUpModal && <LevelUpModal />}
    </Context.Provider>
  )
}

export default ChallengesContext
