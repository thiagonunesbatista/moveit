import '../styles/global.css'

import ChallengesContext from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <ChallengesContext>
        <Component {...pageProps} />
      </ChallengesContext>
    </div>
  )
}

export default MyApp
