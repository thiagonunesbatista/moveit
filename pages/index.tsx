import { GetServerSideProps } from 'next'

import ExperienceBar from '../components/ExperienceBar'

import CompletedChallenges from '../components/CompletedChallenges'
import Counter from '../components/Counter'
import NewCircleCard from '../components/NewCircleCard'
import Profile from '../components/Profile'

import ChallengesContext from '../contexts/ChallengesContext'

import CSSHome from '../styles/Home.module.css'

interface HomeProps {
  completedChallenges: number
  currentExperience: number
  level: number
}

const Home = ({ completedChallenges, currentExperience, level }: HomeProps) => {
  return (
    <ChallengesContext
      completedChallenges={completedChallenges}
      currentExperience={currentExperience}
      level={level}
    >
      <div>
        <ExperienceBar />

        <section className={CSSHome.sectionWrapper}>
          <div className={CSSHome.leftContainer}>
            <Profile />
            <CompletedChallenges className={CSSHome.completedChallenges} />
            <Counter className={CSSHome.counter} />
          </div>

          <div className={CSSHome.rightContainer}>
            <NewCircleCard />
          </div>
        </section>
      </div>
    </ChallengesContext>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { completedChallenges, currentExperience, level } = ctx.req.cookies

  return {
    props: {
      completedChallenges: Number(completedChallenges),
      currentExperience: Number(currentExperience),
      level: Number(level)
    }
  }
}
