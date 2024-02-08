import './CardCar.css'
import imageCar from './../assets/carro-mockup.png'
const CardCar = ({model,brand, km, color, newCar}) => {
  return (
    <div className='container'>
        <div className='image'>
            <img src={imageCar} alt=" carro" />
        </div>
        <div className="details">
            <ul>
                <h2>{model}</h2>
                <li >marca: {brand}</li>
                <li >km: {km}</li>
                <li >cor: {color}</li>
                {newCar && <li>Este carro é novo!</li>}
            </ul>
        </div>
    </div>
  )
}

export default CardCar