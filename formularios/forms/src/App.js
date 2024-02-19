
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h2>forms</h2>
        <MyForm user={{
          name: "Maicon",
          email: "maicon@email.com"
        }}/>
    </div>
  );
}

export default App;
