import './App.css';
import Login from './components/Login/Login';
import Client from './client';
const client = new Client();

function App() {
  return (
    <div className="App">
      <Login client={client}/>
    </div>
  );
}

export default App;
