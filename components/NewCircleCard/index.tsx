import CSSNewCircleCard from './NewCircleCard.module.css'

const NewCircleCard = () => {
  return (
    <div className={CSSNewCircleCard.wrapper}>
      <p>
        Inicie um ciclo
        <br />
        para receber desafios
        <br />
      </p>

      <img src='/up_cycle.svg' />

      <p>
        Avance de level completando
        <br />
        os desafios
      </p>
    </div>
  )
}

export default NewCircleCard
