import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import challenges from '../challenges.json'

const Context = createContext({} as ChallengesContextData)

export const useChallenges = () => useContext(Context)

interface ChallengesContextProps {
  children: ReactNode
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
}

const ChallengesContext = ({ children }: ChallengesContextProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [currentChallenge, setCurrentChallenge] = useState(null)

  const levelUp = () => setLevel(current => (current += 1))

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
    setCompletedChallenges(current => current++)
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
        startNewChallenge
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ChallengesContext
