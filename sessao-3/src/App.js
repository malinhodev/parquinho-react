
import './App.css';
import microphone from './assets/bg-desktop.png'

function App() {
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
      </header>
    </div>
  );
}

export default App;