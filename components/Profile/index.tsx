import CssProfile from './styles.module.css'

const Profile = () => {
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
          <p>Level 10</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
