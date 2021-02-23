import ExperienceBar from '../components/ExperienceBar'

import CompletedChallenges from '../components/CompletedChallenges'
import Counter from '../components/Counter'
import NewCircleCard from '../components/NewCircleCard'
import Profile from '../components/Profile'

import CSSHome from '../styles/Home.module.css'

const Home = () => {
  return (
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
  )
}

export default Home
