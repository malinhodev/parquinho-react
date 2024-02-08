
import './App.css';
import CardCar from './components/CardCar';


function App() {
  const cars = [
    {id: 1, model: 'F8',brand: 'Ferreri', color: "amarela", newCar: true, km: 0},
    {id: 2, model: 'Cerato',brand: 'kia', color: "branco", newCar: false, km: 15463},
    {id: 3, model: 'Clio',brand: 'Renault', color: "azul", newCar: false, km: 987453},
    {id: 4, model: 'GOL',brand: 'wv', color: "vermelho", newCar: true, km: 0},
  ]

  return (
    <div className="App">
      <h1>Lista de carros</h1>
      {cars.map((car)=>(
          <CardCar 
          key={car.id}
          model={car.model}
          brand={car.brand}
          color={car.color} 
          newCar={car.newCar} 
          km={car.km}/>
        ))}
      
    </div>
  );
}

export default App;
