
const CardDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>detalhes do carro</h2>
      <ul>
        <li>marca: {brand}</li>
        <li>km: {km}</li>
        <li>cor: {color}</li>
      </ul>
    {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CardDetails