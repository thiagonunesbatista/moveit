import CssProfile from './styles.module.css'

import { useChallenges } from '../../contexts/ChallengesContext'

const Profile = () => {
  const { level } = useChallenges()

  return (
    <div className={CssProfile.wrapper}>
      <img
        src='https://avatars.githubusercontent.com/u/67487679?v=4'
        alt='GitHub user'
      />

      <div>
        <p>Thiago Nunes Batista</p>
        <div>
          <img src='/up.svg' />
          <p>Level {level}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
