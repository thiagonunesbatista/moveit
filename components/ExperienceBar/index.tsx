import CSSclasses from './styles.module.css'

const ExperienceBar = () => {
  return (
    <header className={CSSclasses.wrapper}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar
