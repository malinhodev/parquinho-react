
import './App.css';
import microphone from './assets/bg-desktop.png'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import CardDetails from './components/CardDetails';
import FunctionProp from './components/FunctionProp';
import CardUsers from './components/CardUsers';

function App() {


  const cars = [
    {id: 1, brand: 'Ferreri', color: "amarela", newCar: true, km: 0},
    {id: 2, brand: 'kia', color: "branco", newCar: false, km: 15463},
    {id: 3, brand: 'Renault', color: "azul", newCar: false, km: 987453},
    {id: 4, brand: 'wv', color: "vermelho", newCar: true, km: 0},
  ]

  const users = [
    {id: 1, name: 'Marlon', old: 31, job: 'Garçom'},
    {id: 2, name: 'Vanda', old: 28, job: 'Cumin'},
    {id: 3, name: 'Bianca', old: 8, job: 'desempregada'},
  ]

  function showMessage(){
    console.log('Evento do componente pai!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sessão 03</h1>
        <h2>avançando no React</h2>
        <div>
          <img src="2.png" alt="imagem com logo code 68" />
        </div>
        <div>
          <img src={microphone} alt="imagem microfone vintage" />
        </div>
    
        <ManageData />
        <ListRender/>
        <ConditionalRender/>
        {/**loop em array = mostrar todos os cards */}
        <h3> lista com loop</h3>
        {cars.map((car)=>(
          <CardDetails 
          key={car.id}
          brand={car.brand}
          color={car.color} 
          newCar={car.newCar} 
          km={car.km}/>
        ))}

        <FunctionProp myFunction={showMessage}/>

        <h3>lista de usuários</h3>
        {users.map((user)=>(
          <CardUsers
          key={user.id}
          name={user.name}
          old={user.old} 
          job={user.job} 
          />
        ))}
      </header>
    </div>
  );
}

export default App;
